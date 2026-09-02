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
    const christina = approvedProfessionals.find((professional) => professional.id === "christina-gorokhovsky");
    const sara = approvedProfessionals.find((professional) => professional.id === "sara-hire");
    const adam = approvedProfessionals.find((professional) => professional.id === "adam-ferguson");
    const brigitte = approvedProfessionals.find((professional) => professional.id === "brigitte-binkert");
    const patrick = approvedProfessionals.find((professional) => professional.id === "patrick-whitaker");
    const ben = approvedProfessionals.find((professional) => professional.id === "ben-jonas");
    const jim = approvedProfessionals.find((professional) => professional.id === "jim-black");
    const lydia = approvedProfessionals.find((professional) => professional.id === "lydia-hsu");

    expect(nisha?.website).toBe("https://www.ghjadvisors.com/about-us/people/nisha-golcha");
    expect(nisha?.photoUrl).toContain("nisha-golcha-headshot");
    expect(michael?.photoUrl).toContain("michael-bryant-headshot");
    expect(kimLe?.photoUrl).toContain("kim-le-headshot");
    expect(christina?.photoUrl).toContain("christina-gorokhovsky-headshot");
    expect(sara?.photoUrl).toContain("sara-hire-headshot");
    expect(adam?.photoUrl).toContain("adam-ferguson-headshot");
    expect(brigitte?.photoUrl).toContain("brigitte-binkert-headshot");
    expect(patrick?.photoUrl).toContain("patrick-whitaker-headshot");
    expect(ben?.photoUrl).toContain("ben-jonas-headshot");
    expect(jim?.photoUrl).toContain("jim-black-headshot");
    expect(lydia?.photoUrl).toContain("lydia-hsu-headshot");
  });
});
