"use client";

import { useEffect, useRef, useState } from "react";
import * as d3 from "d3-force";

interface Node extends d3.SimulationNodeDatum {
    id: number;
    label: string;
    group: number;
}

interface Link extends d3.SimulationLinkDatum<Node> {
    source: Node;
    target: Node;
    value: number;
}

const LABELS = [
    "Deep Learning", "Neural Networks", "Computer Vision",
    "Predictive Models", "Automation", "NLP", "Big Data",
    "Optimization", "Generative AI", "Strategy", "Data Mining",
    "Cognitive", "Inference", "Training", "Deploy", "Robotics",
    "Machine Learning", "Algorithms", "Cloud AI", "Edge Computing"
];

export default function NeuralNetwork() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [nodes, setNodes] = useState<Node[]>([]);
    const [links, setLinks] = useState<Link[]>([]);
    const [activeNode, setActiveNode] = useState<number | null>(null);
    const simulationRef = useRef<d3.Simulation<Node, Link>>(null);

    // Initialize Force Simulation
    useEffect(() => {
        if (!containerRef.current) return;
        const { width, height } = containerRef.current.getBoundingClientRect();

        // 1. Create Nodes
        const nodeCount = 40; // Dense graph
        const initialNodes: Node[] = Array.from({ length: nodeCount }, (_, i) => ({
            id: i,
            label: LABELS[i % LABELS.length],
            group: Math.floor(Math.random() * 3), // Optional grouping for visuals
            x: width / 2 + (Math.random() - 0.5) * 100, // Start near center
            y: height / 2 + (Math.random() - 0.5) * 100,
        }));

        // 2. Create Links (Logic: Connect to random peers to form a "Small World" network + local clusters)
        const initialLinks: Link[] = [];

        // Ensure minimal connectivity (Spanning Tree-ish) to avoid orphans at start
        for (let i = 0; i < nodeCount - 1; i++) {
            initialLinks.push({
                source: initialNodes[i],
                target: initialNodes[i + 1],
                value: 1
            });
        }

        // Add random connections for density
        for (let i = 0; i < nodeCount; i++) {
            const connections = 2 + Math.floor(Math.random() * 3); // 2-5 extra connections per node
            for (let j = 0; j < connections; j++) {
                const target = Math.floor(Math.random() * nodeCount);
                if (target !== i) {
                    initialLinks.push({
                        source: initialNodes[i],
                        target: initialNodes[target],
                        value: Math.random()
                    });
                }
            }
        }

        // 3. Setup Simulation
        const simulation = d3.forceSimulation<Node, Link>(initialNodes)
            .force("link", d3.forceLink<Node, Link>(initialLinks).id(d => d.index!).distance(80).strength(0.3)) // Pull together
            .force("charge", d3.forceManyBody().strength(-300)) // Repel each other (keeps spacing)
            .force("center", d3.forceCenter(width / 2, height / 2).strength(0.1)) // Keep visually centered
            .force("collide", d3.forceCollide().radius(30).strength(0.7)); // Avoid overlaps

        simulationRef.current = simulation;

        // 4. Update State on Tick
        simulation.on("tick", () => {
            // Create new array references to trigger React re-render
            setNodes([...initialNodes]);
            setLinks([...initialLinks]);
        });

        // Cleanup
        return () => {
            simulation.stop();
        };
    }, []);

    // Handle Resize (Optional re-center)
    useEffect(() => {
        const handleResize = () => {
            if (!containerRef.current || !simulationRef.current) return;
            const { width, height } = containerRef.current.getBoundingClientRect();
            simulationRef.current.force("center", d3.forceCenter(width / 2, height / 2));
            simulationRef.current.alpha(0.3).restart();
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    // Interaction: Dragging (Simplified to simple click for now, drag is complex in React/SVG without d3-drag hooks)
    const handleNodeClick = (id: number) => {
        setActiveNode(activeNode === id ? null : id);
        // Heat up simulation slightly on interaction
        simulationRef.current?.alpha(0.1).restart();
    };

    return (
        <div ref={containerRef} className="absolute inset-0 z-0 overflow-hidden pointer-events-none md:pointer-events-auto bg-transparent">
            <svg className="w-full h-full">
                {/* Links */}
                {links.map((link, i) => (
                    <line
                        key={i}
                        x1={(link.source as Node).x}
                        y1={(link.source as Node).y}
                        x2={(link.target as Node).x}
                        y2={(link.target as Node).y}
                        stroke="#000000"
                        strokeWidth="0.5"
                        strokeOpacity="0.1"
                    />
                ))}

                {/* Nodes */}
                {nodes.map((node) => (
                    <g
                        key={node.id}
                        transform={`translate(${node.x},${node.y})`}
                        className="cursor-pointer"
                        onClick={() => handleNodeClick(node.id)}
                        style={{ pointerEvents: 'all' }}
                    >
                        {/* Hit Area */}
                        <circle r="30" fill="transparent" />

                        {/* Visible Node */}
                        <circle
                            r={activeNode === node.id ? 6 : 3}
                            fill={activeNode === node.id ? "#0047FF" : "#1C1C1E"}
                            className="transition-colors duration-300"
                        />

                        {/* Pulse */}
                        {activeNode === node.id && (
                            <circle r="10" stroke="#0047FF" strokeWidth="1" fill="none" opacity="0.6">
                                <animate attributeName="r" from="6" to="30" dur="1.5s" repeatCount="indefinite" />
                                <animate attributeName="opacity" from="0.6" to="0" dur="1.5s" repeatCount="indefinite" />
                            </circle>
                        )}

                        {/* Label */}
                        <text
                            x="12"
                            y="4"
                            className={`text-[10px] font-mono font-medium uppercase tracking-widest fill-current transition-opacity duration-300 ${activeNode === node.id ? "opacity-100 fill-primary" : "opacity-0"
                                }`}
                            style={{ pointerEvents: 'none' }}
                        >
                            {node.label}
                        </text>
                    </g>
                ))}
            </svg>
        </div>
    );
}
