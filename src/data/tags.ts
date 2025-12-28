export type Tone =
  | "core"
  | "secondary"
  | "philosophy"
  | "interaction"
  | "architecture"
  | "quality";

export type Tag = {
  label: string;
  tone: Tone;
  hint: string;
};

export const TAGS: Tag[] = [
  { label: "React", tone: "core", hint: "Component-first UI composition." },
  {
    label: "Next.js",
    tone: "core",
    hint: "SSR + routing + production structure.",
  },
  { label: "TypeScript", tone: "core", hint: "Type-driven UI contracts." },
  {
    label: "Tailwind",
    tone: "core",
    hint: "Tokenized styling with fast iteration.",
  },
  {
    label: "Vue",
    tone: "core",
    hint: "Reactive UI patterns and clean ergonomics.",
  },

  {
    label: "Figma",
    tone: "secondary",
    hint: "Design handoff, layout, and tokens.",
  },
  {
    label: "PostgreSQL",
    tone: "secondary",
    hint: "Relational data modeling + queries.",
  },
  {
    label: "REST APIs",
    tone: "secondary",
    hint: "Stable endpoints and clear contracts.",
  },
  {
    label: "WebSockets",
    tone: "secondary",
    hint: "Realtime sync, events, optimistic flows.",
  },

  {
    label: "State -> Flow -> Feedback",
    tone: "philosophy",
    hint: "State transitions first, feedback always.",
  },
  {
    label: "Explicit State",
    tone: "philosophy",
    hint: "Every UI state has a name + rule.",
  },
  {
    label: "Predictable UI",
    tone: "philosophy",
    hint: "No surprises -> clear next step.",
  },

  {
    label: "UI Interactions",
    tone: "interaction",
    hint: "Interactions that communicate intent + result.",
  },
  {
    label: "Micro-interactions",
    tone: "interaction",
    hint: "Tiny cues that improve clarity.",
  },
  {
    label: "Optimistic UI",
    tone: "interaction",
    hint: "Instant feedback while server catches up.",
  },
  {
    label: "Rollback Handling",
    tone: "interaction",
    hint: "Recover gracefully when actions fail.",
  },

  {
    label: "Component-driven",
    tone: "architecture",
    hint: "Reusable building blocks with boundaries.",
  },
  {
    label: "Design Systems",
    tone: "architecture",
    hint: "Tokens + primitives + patterns that scale.",
  },
  {
    label: "Separation of Concerns",
    tone: "architecture",
    hint: "UI, state, domain stay decoupled.",
  },

  {
    label: "Type-safe",
    tone: "quality",
    hint: "Fewer runtime surprises through strict types.",
  },
  {
    label: "Scalable",
    tone: "quality",
    hint: "Structure that holds as features grow.",
  },
  {
    label: "Maintainable",
    tone: "quality",
    hint: "Readable, change-friendly codebases.",
  },
];

export const TONE_CLASS: Record<Tone, string> = {
  philosophy:
    "bg-brand-mint/12 border-brand-mint/40 text-ink-main font-semibold italic hover:bg-brand-mint/18",
  core: "text-ink-main font-medium",
  interaction: "text-ink-main/90",
  secondary: "text-ink-sub text-xs",
  architecture: "text-ink-sub/80 text-xs",
  quality: "text-ink-sub/60 text-xs italic",
};
