"use client";

import type { ComponentType } from "react";

export interface Explorable {
  title: string;
  description: string;
  Component: ComponentType;
}

/** Registry of interactive widgets, keyed by id. */
export const EXPLORABLES_ALL: Record<string, Explorable> = {};

/** Default widget keys per topic (used when a topic's extras don't specify any). */
export const DEFAULT_WIDGETS: Record<string, string[]> = {};
