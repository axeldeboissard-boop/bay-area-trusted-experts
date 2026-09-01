import { describe, expect, it } from "vitest";
import {
  approvedProfessionals,
  professionalsForLifeEvent,
  searchApprovedProfessionals,
} from "../client/src/data/approvedProfessionals";

describe("approved professional directory", () => {
  it("contains only the 20 people from the supplied approved roster", () => {
    expect(approvedProfessionals).toHaveLength(20);
    expect(approvedProfessionals.map((professional) => professional.name)).toContain("Christina Gorokhovsky");
    expect(approvedProfessionals.map((professional) => professional.name)).not.toContain("Jane Smith");
  });

  it("returns only approved inheritance professionals for that life event", () => {
    const results = professionalsForLifeEvent("Inheritance");
    expect(results.length).toBeGreaterThan(0);
    expect(results.every((professional) => professional.lifeEvents.includes("Inheritance"))).toBe(true);
  });

  it("finds a relevant approved contact when a consumer searches by need", () => {
    const results = searchApprovedProfessionals("home insurance");
    expect(results.map((professional) => professional.name)).toContain("Ben Jonas");
    expect(results.every((professional) => approvedProfessionals.includes(professional))).toBe(true);
  });
});
