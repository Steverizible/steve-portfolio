/**
 * Central Portfolio Proof & Evidence System.
 *
 * Status definitions:
 * - real: genuine asset with no private information
 * - redacted: genuine asset with confidential details removed
 * - illustrative: explains a concept; not a real app/report screenshot
 * - prototype: genuine early/demo state, not necessarily production
 * - temporary: intentional placeholder awaiting a verified asset
 */

export type EvidenceStatus =
  | "real"
  | "redacted"
  | "illustrative"
  | "prototype"
  | "temporary";

export type EvidenceCategory =
  | "performance"
  | "product"
  | "workflow"
  | "creative"
  | "technical"
  | "research"
  | "implementation";

export type EvidenceAsset = {
  id: string;
  projectId: string;
  sectionId: string;
  title: string;
  description: string;
  whatItProves: string;
  status: EvidenceStatus;
  category: EvidenceCategory;
  imageSrc?: string;
  alt?: string;
  caption?: string;
  toolLabel?: string;
  sourceDate?: string;
  privacyNote?: string;
  methodologyNote?: string;
  replacementPriority?: "high" | "medium" | "low";
  requiredAssetNote?: string;
  preferredPath?: string;
  externalUrl?: string;
  span?: "normal" | "wide";
};

export type EvidenceGallerySection = {
  projectId: string;
  eyebrow: string;
  heading: string;
  introduction: string;
  privacyFooter?: string;
  methodologyFooter?: string;
  items: EvidenceAsset[];
};

const PLACEHOLDER = {
  performance: "/images/evidence/placeholders/performance-report.svg",
  product: "/images/evidence/placeholders/product-screen.svg",
  workflow: "/images/evidence/placeholders/workflow-record.svg",
  creative: "/images/evidence/placeholders/creative-wireframe.svg",
  technical: "/images/evidence/placeholders/technical-proof.svg",
  research: "/images/evidence/placeholders/workflow-record.svg",
  implementation: "/images/evidence/placeholders/workflow-record.svg",
} as const;

function resolveImage(asset: Omit<EvidenceAsset, "imageSrc"> & { imageSrc?: string }): string {
  if (asset.imageSrc) return asset.imageSrc;
  if (asset.status === "temporary") return PLACEHOLDER[asset.category];
  return PLACEHOLDER[asset.category];
}

function withImages(items: EvidenceAsset[]): EvidenceAsset[] {
  return items.map((item) => ({
    ...item,
    imageSrc: resolveImage(item),
    alt:
      item.alt ??
      `${item.status.toUpperCase()} ${item.toolLabel ?? item.category} evidence: ${item.title}`,
  }));
}

export const evidenceStatusLabel: Record<EvidenceStatus, string> = {
  real: "Real",
  redacted: "Redacted",
  illustrative: "Illustrative",
  prototype: "Prototype",
  temporary: "Temporary",
};

export const evidenceCategoryLabel: Record<EvidenceCategory, string> = {
  performance: "Performance",
  product: "Product",
  workflow: "Workflow",
  creative: "Creative",
  technical: "Technical",
  research: "Research",
  implementation: "Implementation",
};

export const fishewearEvidenceGallery: EvidenceGallerySection = {
  projectId: "fishewear-growth-system",
  eyebrow: "The Evidence",
  heading: "What the Connected Growth System Looked Like in Practice",
  introduction:
    "The work extended beyond strategy documents and campaign copy. It connected commercial reporting, lifecycle performance, customer segmentation, product validation, content production, creative execution, and post-campaign analysis.",
  privacyFooter:
    "Customer information, account identifiers, order-level details, credentials, and unapproved financial information are removed before any report enters the portfolio.",
  methodologyFooter:
    "Existing FisheWear metrics remain limited to previously approved aggregate comparisons. Shopify and Klaviyo attribution are directional marketing evidence, not audited financial reporting, and AI assistance is not claimed as the sole cause of growth.",
  items: withImages([
    {
      id: "fishewear-shopify-yoy",
      projectId: "fishewear-growth-system",
      sectionId: "evidence",
      title: "Shopify Year-Over-Year Performance",
      description:
        "Verified screenshot required. A redacted Shopify comparison showing approved aggregate sales, orders, store sessions, and average-order-value for the measured periods.",
      whatItProves:
        "The commercial result was measured through current Shopify reporting rather than estimated from campaign activity alone.",
      status: "temporary",
      category: "performance",
      toolLabel: "Shopify",
      preferredPath:
        "public/images/evidence/fishewear/shopify-yoy-redacted.webp",
      requiredAssetNote:
        "Capture a redacted Shopify YoY report with approved aggregates only. Blur customer names, order numbers, individual order values, account IDs, and private admin chrome.",
      replacementPriority: "high",
      span: "wide",
      privacyNote:
        "Customer names, order numbers, individual order values, and account identifiers must be removed.",
      methodologyNote:
        "Use only previously approved aggregate comparisons already documented in the FisheWear case study.",
      caption:
        "Temporary slot for a redacted Shopify year-over-year report covering approved aggregate sales, orders, sessions, and average order value.",
    },
    {
      id: "fishewear-klaviyo-flows",
      projectId: "fishewear-growth-system",
      sectionId: "evidence",
      title: "Automated Lifecycle Performance",
      description:
        "Verified screenshot required. A redacted Klaviyo flow-performance view covering welcome, abandoned-cart, browse-abandonment, post-purchase, and price-drop automations.",
      whatItProves:
        "The lifecycle system generated measurable value between promotional campaigns.",
      status: "temporary",
      category: "performance",
      toolLabel: "Klaviyo",
      preferredPath:
        "public/images/evidence/fishewear/klaviyo-flow-performance-redacted.webp",
      requiredAssetNote:
        "Capture approved aggregate flow values only. Do not make open rate the primary proof. Remove customer data, account IDs, order details, and private segment membership.",
      replacementPriority: "high",
      privacyNote:
        "Customer information, account identifiers, and order-level details have been removed from published evidence.",
      caption:
        "Temporary slot for a redacted Klaviyo flow-performance report focused on automation contribution rather than vanity open rates.",
    },
    {
      id: "fishewear-campaign-sequence",
      projectId: "fishewear-growth-system",
      sectionId: "evidence",
      title: "Phased Campaign Architecture",
      description:
        "Verified screenshot required. Campaign phases, naming convention, email/SMS relationship, dates, and draft or review state—without customer-level data.",
      whatItProves:
        "Campaigns were built as coordinated sequences rather than isolated sends.",
      status: "temporary",
      category: "workflow",
      toolLabel: "Klaviyo / Airtable",
      preferredPath:
        "public/images/evidence/fishewear/phased-campaign-sequence.webp",
      requiredAssetNote:
        "Show phase structure and naming. Exclude subscriber lists and private account identifiers.",
      replacementPriority: "medium",
      caption:
        "Temporary slot for a phased campaign architecture view showing coordinated email and SMS stages.",
    },
    {
      id: "fishewear-segmentation",
      projectId: "fishewear-growth-system",
      sectionId: "evidence",
      title: "Audience and Exclusion Strategy",
      description:
        "Verified screenshot required. Engagement windows, audience logic, recent-purchaser exclusions, and approved high-value logic without exposing subscribers.",
      whatItProves:
        "Customer communication was shaped by behavior and commercial relevance rather than sent indiscriminately.",
      status: "temporary",
      category: "workflow",
      toolLabel: "Klaviyo",
      preferredPath:
        "public/images/evidence/fishewear/audience-segmentation-redacted.webp",
      requiredAssetNote:
        "Never expose individual subscribers or emails. Draft audience size only if approved for publication.",
      replacementPriority: "medium",
      privacyNote:
        "Individual subscribers, emails, and private segment membership must not appear.",
      caption:
        "Temporary slot for a redacted audience and exclusion strategy view emphasizing behavioral relevance.",
    },
    {
      id: "fishewear-content-system",
      projectId: "fishewear-growth-system",
      sectionId: "evidence",
      title: "Content and Creative Production System",
      description:
        "Verified screenshot required. Content planning connected to Shopify articles, Airtable records, email reuse, and social or video reuse with production status.",
      whatItProves:
        "Content was treated as a reusable commercial asset rather than an isolated blog or email request.",
      status: "temporary",
      category: "creative",
      toolLabel: "Airtable / Shopify / Creative",
      preferredPath:
        "public/images/evidence/fishewear/content-production-workflow.webp",
      requiredAssetNote:
        "Prefer a real production workflow capture. Remove internal comments not intended for publication.",
      replacementPriority: "medium",
      caption:
        "Temporary slot for a content and creative production workflow showing reuse across channels.",
    },
    {
      id: "fishewear-reporting-loop",
      projectId: "fishewear-growth-system",
      sectionId: "evidence",
      title: "Post-Campaign Analysis",
      description:
        "Verified screenshot required. Performance summary, channel comparison, phase findings, recommended next action, and attribution caveats.",
      whatItProves:
        "Results were converted into decisions and the next campaign plan.",
      status: "temporary",
      category: "implementation",
      toolLabel: "Reporting",
      preferredPath:
        "public/images/evidence/fishewear/post-campaign-analysis-redacted.webp",
      requiredAssetNote:
        "Include attribution caveats. Remove unapproved financial detail and customer-level data.",
      replacementPriority: "high",
      privacyNote:
        "Unapproved financial details and customer-level data must be removed.",
      caption:
        "Temporary slot for a redacted post-campaign analysis that converts results into the next planning decision.",
    },
  ]),
};

export const totelyEvidenceGallery: EvidenceGallerySection = {
  projectId: "totely-ai-storage",
  eyebrow: "The Evidence",
  heading: "From Product Concept to Working System",
  introduction:
    "Totely moved beyond positioning and interface concepts into a connected product ecosystem spanning the marketing site, application, storage workflow, physical labels, development process, and launch preparation.",
  privacyFooter:
    "Private repository URLs, tokens, environment variables, authentication details, and personal account information must never appear in Totely evidence.",
  items: withImages([
    {
      id: "totely-marketing-site",
      projectId: "totely-ai-storage",
      sectionId: "evidence",
      title: "Live Totely Marketing Experience",
      description:
        "Verified local screenshot required of the public Totely marketing experience—hero, product explanation, and the number / photograph / find workflow.",
      whatItProves:
        "The product has a functioning public-facing marketing experience.",
      status: "temporary",
      category: "product",
      toolLabel: "Totely Marketing",
      preferredPath: "public/images/evidence/totely/marketing-site.webp",
      externalUrl: "https://totely.app",
      requiredAssetNote:
        "Capture a local screenshot from https://totely.app. Do not hotlink the live page image.",
      replacementPriority: "high",
      caption:
        "Temporary slot for a local screenshot of the live Totely marketing site explaining the storage workflow.",
    },
    {
      id: "totely-search",
      projectId: "totely-ai-storage",
      sectionId: "evidence",
      title: "Natural-Language Search Experience",
      description:
        "Verified screenshot required showing a search question, matching tote, storage location, related contents, and mobile interface.",
      whatItProves:
        "The product is designed around retrieval rather than complicated manual inventory management.",
      status: "temporary",
      category: "product",
      toolLabel: "Totely App",
      preferredPath: "public/images/evidence/totely/search-experience.webp",
      requiredAssetNote:
        "If the capture is not current production UI, set status to prototype before publishing.",
      replacementPriority: "high",
      caption:
        "Temporary slot for a Totely search experience showing tote match and location context.",
    },
    {
      id: "totely-add-container",
      projectId: "totely-ai-storage",
      sectionId: "evidence",
      title: "Add a Container Workflow",
      description:
        "Verified screenshot required covering tote number, photos, location, optional details, and completion state.",
      whatItProves:
        "The system provides a practical path from physical storage to searchable digital information.",
      status: "temporary",
      category: "product",
      toolLabel: "Totely App",
      preferredPath: "public/images/evidence/totely/add-container-workflow.webp",
      requiredAssetNote:
        "Blur personal contents or private locations if present. Label prototype if not production.",
      replacementPriority: "high",
      caption:
        "Temporary slot for the add-a-container workflow from physical tote identity to digital record.",
    },
    {
      id: "totely-numbered-labels",
      projectId: "totely-ai-storage",
      sectionId: "evidence",
      title: "Physical Numbered Label System",
      description:
        "Verified photography required of numbered tote labels in a realistic storage environment with consistent tote identity.",
      whatItProves:
        "The digital system is connected to a simple physical identity system.",
      status: "temporary",
      category: "product",
      toolLabel: "Physical Product",
      preferredPath: "public/images/evidence/totely/numbered-label-system.webp",
      requiredAssetNote:
        "Do not label AI-generated imagery as real. If only concept imagery exists, use status illustrative.",
      replacementPriority: "high",
      caption:
        "Temporary slot for real numbered-label photography connecting physical containers to digital retrieval.",
    },
    {
      id: "totely-development",
      projectId: "totely-ai-storage",
      sectionId: "evidence",
      title: "Development and Repository Evidence",
      description:
        "Verified redacted development evidence required—repository activity, product components, or Cursor/GitHub workflow without secrets.",
      whatItProves:
        "The project moved beyond concept design into application and website development.",
      status: "temporary",
      category: "technical",
      toolLabel: "GitHub / Cursor",
      preferredPath:
        "public/images/evidence/totely/development-evidence-redacted.webp",
      requiredAssetNote:
        "Remove private repo URLs, tokens, emails, env vars, and authentication details before commit.",
      replacementPriority: "medium",
      privacyNote:
        "Private repository information, tokens, and credentials must be removed.",
      caption:
        "Temporary slot for redacted development evidence showing real implementation work.",
    },
    {
      id: "totely-launch-preparation",
      projectId: "totely-ai-storage",
      sectionId: "evidence",
      title: "Launch and App Store Preparation",
      description:
        "Verified screenshot required of app icon, mobile screenshots, listing copy, privacy/support preparation, or device layouts.",
      whatItProves:
        "The product was prepared as a real launchable digital experience.",
      status: "temporary",
      category: "implementation",
      toolLabel: "Launch Prep",
      preferredPath: "public/images/evidence/totely/launch-preparation.webp",
      requiredAssetNote:
        "Do not claim App Store approval or public iOS release unless verified. Use prototype status for prep-only materials.",
      replacementPriority: "medium",
      caption:
        "Temporary slot for launch-preparation materials without implying App Store approval.",
    },
  ]),
};

export const campaignEvidenceGallery: EvidenceGallerySection = {
  projectId: "klaviyo-campaign-intelligence",
  eyebrow: "The Evidence",
  heading: "The System in Practice",
  introduction:
    "The operating model connects performance evidence, commercial verification, structured campaign planning, creative production, human approval, draft creation, and post-campaign learning.",
  privacyFooter:
    "Private Airtable/Figma links, account IDs, subscriber information, credentials, and unapproved commercial details must be removed before publication.",
  items: withImages([
    {
      id: "campaign-klaviyo-analysis",
      projectId: "klaviyo-campaign-intelligence",
      sectionId: "evidence",
      title: "Klaviyo Performance Review",
      description:
        "Verified screenshot required of recent campaign or flow performance, channel contribution, phase performance, list-health signals, and flagged anomalies.",
      whatItProves:
        "The campaign process begins with evidence rather than an empty creative brief.",
      status: "temporary",
      category: "performance",
      toolLabel: "Klaviyo",
      preferredPath:
        "public/images/evidence/campaign-system/klaviyo-analysis-redacted.webp",
      requiredAssetNote:
        "Use approved aggregates only. Remove customer data and account identifiers.",
      replacementPriority: "high",
      span: "wide",
      privacyNote:
        "Customer data and account identifiers must be removed.",
      caption:
        "Temporary slot for a redacted Klaviyo performance review that opens the campaign process with evidence.",
    },
    {
      id: "campaign-shopify-validation",
      projectId: "klaviyo-campaign-intelligence",
      sectionId: "evidence",
      title: "Shopify Product and Inventory Verification",
      description:
        "Verified screenshot required showing approved products, status, sale eligibility, inventory suitability, product URLs, and imagery.",
      whatItProves:
        "Campaign copy and creative are based on current commercial reality.",
      status: "temporary",
      category: "workflow",
      toolLabel: "Shopify",
      preferredPath:
        "public/images/evidence/campaign-system/shopify-product-validation-redacted.webp",
      requiredAssetNote:
        "Do not expose vendor costs, private admin data, or customer information.",
      replacementPriority: "high",
      privacyNote:
        "Vendor costs, private admin data, and customer information must be removed.",
      caption:
        "Temporary slot for Shopify product and inventory verification used before featuring products in campaigns.",
    },
    {
      id: "campaign-airtable-record",
      projectId: "klaviyo-campaign-intelligence",
      sectionId: "evidence",
      title: "Structured Airtable Campaign Record",
      description:
        "Verified screenshot required of a campaign record covering objective, phase, audience, exclusions, products, copy, creative status, review status, draft status, results, and next notes.",
      whatItProves:
        "Strategy becomes structured work that can move across teams and platforms.",
      status: "temporary",
      category: "workflow",
      toolLabel: "Airtable",
      preferredPath:
        "public/images/evidence/campaign-system/airtable-campaign-record-redacted.webp",
      requiredAssetNote:
        "Remove private base links, internal IDs, personal information, confidential notes, and credentials.",
      replacementPriority: "high",
      span: "wide",
      privacyNote:
        "Private Airtable links, internal IDs, and confidential notes must be removed.",
      caption:
        "Temporary slot for a redacted Airtable campaign record that carries strategy into execution.",
    },
    {
      id: "campaign-figma-wireframe",
      projectId: "klaviyo-campaign-intelligence",
      sectionId: "evidence",
      title: "Figma Creative Wireframe",
      description:
        "Verified wireframe required showing content hierarchy, hero placement, product modules, CTAs, mobile/desktop structure, and designer notes.",
      whatItProves:
        "Structured campaign information can become a designer-ready creative starting point.",
      status: "temporary",
      category: "creative",
      toolLabel: "Figma",
      preferredPath:
        "public/images/evidence/campaign-system/figma-email-wireframe.webp",
      requiredAssetNote:
        "If created as a process demonstration rather than a live campaign asset, set status to prototype.",
      replacementPriority: "medium",
      caption:
        "Temporary slot for a Figma email wireframe produced from structured campaign data.",
    },
    {
      id: "campaign-klaviyo-draft",
      projectId: "klaviyo-campaign-intelligence",
      sectionId: "evidence",
      title: "Review-Ready Klaviyo Draft",
      description:
        "Verified screenshot required of draft status, campaign naming, subject line, preview text, creative preview, audience summary, exclusions, and internal notes.",
      whatItProves:
        "Approved strategy and creative can be prepared as a structured draft without automatically sending the campaign.",
      status: "temporary",
      category: "implementation",
      toolLabel: "Klaviyo",
      preferredPath:
        "public/images/evidence/campaign-system/klaviyo-draft-redacted.webp",
      requiredAssetNote:
        "Do not show autonomous send. Exclude subscriber information and live send controls that imply autonomy.",
      replacementPriority: "high",
      privacyNote:
        "Subscriber information and private segment membership must be removed.",
      caption:
        "Temporary slot for a review-ready Klaviyo draft that remains human-controlled before send.",
    },
    {
      id: "campaign-feedback-loop",
      projectId: "klaviyo-campaign-intelligence",
      sectionId: "evidence",
      title: "Performance-to-Planning Feedback Loop",
      description:
        "Verified or designed summary required covering results, findings, creative/audience/product learnings, recommended tests, and next campaign direction.",
      whatItProves:
        "The system is designed to improve the next decision, not only produce the current campaign.",
      status: "temporary",
      category: "implementation",
      toolLabel: "Airtable / Reporting",
      preferredPath:
        "public/images/evidence/campaign-system/performance-feedback-loop.webp",
      requiredAssetNote:
        "May be real, redacted, or illustrative once prepared. Keep attribution caveats visible.",
      replacementPriority: "medium",
      caption:
        "Temporary slot for the performance-to-planning feedback loop that improves the next campaign.",
    },
  ]),
};

export const aiMethodEvidenceGallery: EvidenceGallerySection = {
  projectId: "how-i-build-with-ai",
  eyebrow: "The Evidence",
  heading: "The Operating Model Across Real Work",
  introduction:
    "These examples connect the same operating method across business growth, product development, and campaign operations—without repeating every case-study gallery.",
  privacyFooter:
    "Complete proprietary prompts and confidential client instructions are not published. Documentation evidence should preserve learning without exposing private systems.",
  items: withImages([
    {
      id: "ai-method-cross-project",
      projectId: "how-i-build-with-ai",
      sectionId: "evidence",
      title: "One Method Across Different Problems",
      description:
        "An illustrative map connecting FisheWear, Totely, and Campaign Intelligence through shared operating stages and different business outcomes.",
      whatItProves:
        "The operating method can support business growth, product development, and operational workflow design.",
      status: "illustrative",
      category: "workflow",
      toolLabel: "Operating Model",
      imageSrc: "/images/evidence/ai-method/cross-project-method.svg",
      preferredPath: "public/images/evidence/ai-method/cross-project-method.svg",
      replacementPriority: "low",
      caption:
        "Illustrative diagram showing one operating method applied across growth, product, and campaign systems.",
    },
    {
      id: "ai-method-tool-handoff",
      projectId: "how-i-build-with-ai",
      sectionId: "evidence",
      title: "Structured Work Moving Between Tools",
      description:
        "An illustrative sequence from retrieved context to structured record, creative production, draft, analysis, and documentation.",
      whatItProves:
        "AI becomes valuable when information can move between steps without losing context.",
      status: "illustrative",
      category: "workflow",
      toolLabel: "Connected Workflow",
      imageSrc: "/images/evidence/ai-method/tool-handoff.svg",
      preferredPath: "public/images/evidence/ai-method/tool-handoff.svg",
      replacementPriority: "low",
      caption:
        "Illustrative handoff visual showing structured work moving across tools without losing context.",
    },
    {
      id: "ai-method-human-approval",
      projectId: "how-i-build-with-ai",
      sectionId: "evidence",
      title: "Human Approval Inside the Workflow",
      description:
        "An illustrative governance loop: AI recommendation, human review, approved action, measurement, and learning.",
      whatItProves:
        "Human accountability remains part of the operating architecture.",
      status: "illustrative",
      category: "implementation",
      toolLabel: "Governance",
      imageSrc: "/images/evidence/ai-method/human-approval.svg",
      preferredPath: "public/images/evidence/ai-method/human-approval.svg",
      replacementPriority: "low",
      caption:
        "Illustrative governance diagram placing human approval between AI preparation and execution.",
    },
    {
      id: "ai-method-documentation",
      projectId: "how-i-build-with-ai",
      sectionId: "evidence",
      title: "Reusable Documentation and Learning",
      description:
        "Verified or carefully redacted documentation evidence required—workflow standards, decision records, or campaign learnings without proprietary secrets.",
      whatItProves:
        "The system preserves knowledge so future work begins with better context.",
      status: "temporary",
      category: "implementation",
      toolLabel: "Documentation",
      preferredPath:
        "public/images/evidence/ai-method/documentation-system.webp",
      requiredAssetNote:
        "Do not reveal complete proprietary instructions. Prefer redacted standards and learning records.",
      replacementPriority: "medium",
      caption:
        "Temporary slot for reusable documentation that preserves learning without exposing private instructions.",
    },
  ]),
};

export const evidenceGalleries = {
  "fishewear-growth-system": fishewearEvidenceGallery,
  "totely-ai-storage": totelyEvidenceGallery,
  "klaviyo-campaign-intelligence": campaignEvidenceGallery,
  "how-i-build-with-ai": aiMethodEvidenceGallery,
} as const;

export function getEvidenceGallery(
  projectId: keyof typeof evidenceGalleries
): EvidenceGallerySection {
  return evidenceGalleries[projectId];
}

/** Projects/systems that currently host an evidence gallery. */
export const projectsWithEvidenceGallery = new Set([
  "fishewear-growth-system",
  "totely-ai-storage",
  "klaviyo-campaign-intelligence",
]);
