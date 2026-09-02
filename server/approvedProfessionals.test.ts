import { describe, expect, it } from "vitest";
import {
  approvedProfessionals,
  professionalsForLifeEvent,
  professionalsForTile,
  searchApprovedProfessionals,
} from "../client/src/data/approvedProfessionals";

describe("approved professional directory", () => {
  it("contains the supplied roster plus the explicitly approved Jim Black addition", () => {
    expect(approvedProfessionals).toHaveLength(21);
    expect(approvedProfessionals.map((professional) => professional.name)).toContain("Christina Gorokhovsky");
    expect(approvedProfessionals.map((professional) => professional.name)).toContain("Jim Black");
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

  it("returns three approved professionals for life-event tiles and only Jim Black for Mortgage", () => {
    expect(professionalsForTile("Buying a Home")).toHaveLength(3);
    expect(professionalsForTile("Mortgage").map((professional) => professional.name)).toEqual(["Jim Black"]);
  });

  it("keeps supplied profile assets and website information attached to the matching approved entries", () => {
    const nisha = approvedProfessionals.find((professional) => professional.id === "nisha-golcha");
    const michael = approvedProfessionals.find((professional) => professional.id === "michael-bryant");
    const kimLe = approvedProfessionals.find((professional) => professional.id === "kim-le");

    expect(nisha?.website).toBe("https://www.ghjadvisors.com/about-us/people/nisha-golcha");
    expect(nisha?.photoUrl).toContain("nisha-golcha-headshot");
    expect(michael?.photoUrl).toContain("michael-bryant-headshot");
    expect(kimLe?.photoUrl).toContain("kim-le-headshot");
  });
});
