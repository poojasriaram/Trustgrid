import { createFileRoute } from "@tanstack/react-router";
import { ServiceDetail } from "@/components/site/ServiceDetail";

export function LongMemoryAiSystemsSection({ excludeHeroAndCta = false }: { excludeHeroAndCta?: boolean }) {
  return (
    <ServiceDetail
      eyebrow="Long-Memory AI"
      title="AI that remembers — across years, not conversations"
      description="Hybrid memory architectures combining vector embeddings, knowledge graphs and structured stores so your AI compounds value over time."
      capabilities={[
        { title: "Vector Databases", desc: "High-recall semantic memory at billion-scale embeddings." },
        { title: "Knowledge Graphs", desc: "Structured enterprise ontologies with reasoning over relationships." },
        { title: "Persistent Memory", desc: "Episodic and semantic memory for long-running agent sessions." },
        { title: "RAG Architecture", desc: "Multi-stage retrieval, re-ranking, fusion and grounding." },
        { title: "Semantic Search", desc: "Hybrid lexical-semantic search across enterprise corpora." },
        { title: "Memory Governance", desc: "TTL, redaction, citation and provenance tracking." },
      ]}
      stack={["Pinecone", "Weaviate", "Milvus", "Neo4j", "Qdrant", "Elasticsearch", "LangChain"]}
      excludeHeroAndCta={excludeHeroAndCta}
    />
  );
}

export const Route = createFileRoute("/long-memory-ai-systems")({
  head: () => ({
    meta: [
      { title: "Long-Memory AI Systems — Knowledge Across Years | TrustGrid.AI" },
      { name: "description", content: "Engineer AI systems that retain knowledge across years instead of conversations. Vector databases, knowledge graphs, RAG and semantic search." },
      { property: "og:title", content: "Long-Memory AI Systems | TrustGrid.AI" },
      { property: "og:description", content: "AI memory architectures that span years of enterprise context." },
      { property: "og:url", content: "/long-memory-ai-systems" },
    ],
    links: [{ rel: "canonical", href: "/long-memory-ai-systems" }],
  }),
  component: () => <LongMemoryAiSystemsSection />,
});
