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

  it("keeps a supplied official destination for every active approved professional", () => {
    expect(approvedProfessionals.every((professional) => Boolean(professional.website))).toBe(true);
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
    const mike = approvedProfessionals.find((professional) => professional.id === "mike-lee");
    const zach = approvedProfessionals.find((professional) => professional.id === "zach-smith");
    const meghan = approvedProfessionals.find((professional) => professional.id === "meghan-herning");
    const patricia = approvedProfessionals.find((professional) => professional.id === "patricia-zerbini");
    const kara = approvedProfessionals.find((professional) => professional.id === "kara-foster");
    const angelo = approvedProfessionals.find((professional) => professional.id === "angelo-desando");
    const saraMajumder = approvedProfessionals.find((professional) => professional.id === "sarada-majumder");
    const kimGaxiola = approvedProfessionals.find((professional) => professional.id === "kim-gaxiola");
    const mikeLee = approvedProfessionals.find((professional) => professional.id === "mike-lee");
    const jasonPapier = approvedProfessionals.find((professional) => professional.id === "jason-papier");
    const zachSmith = approvedProfessionals.find((professional) => professional.id === "zach-smith");
    const christinaGorokhovsky = approvedProfessionals.find((professional) => professional.id === "christina-gorokhovsky");
    const saraHire = approvedProfessionals.find((professional) => professional.id === "sara-hire");
    const adamFerguson = approvedProfessionals.find((professional) => professional.id === "adam-ferguson");
    const brigitteBinkert = approvedProfessionals.find((professional) => professional.id === "brigitte-binkert");
    const lydiaHsu = approvedProfessionals.find((professional) => professional.id === "lydia-hsu");
    const meghanHerning = approvedProfessionals.find((professional) => professional.id === "meghan-herning");
    const patriciaZerbini = approvedProfessionals.find((professional) => professional.id === "patricia-zerbini");
    const karaFoster = approvedProfessionals.find((professional) => professional.id === "kara-foster");
    const bauLinYueh = approvedProfessionals.find((professional) => professional.id === "bau-lin-yueh");
    const benJonas = approvedProfessionals.find((professional) => professional.id === "ben-jonas");
    const patrickWhitaker = approvedProfessionals.find((professional) => professional.id === "patrick-whitaker");
    const angeloDeSando = approvedProfessionals.find((professional) => professional.id === "angelo-desando");

    expect(nisha?.website).toBe("https://www.ghjadvisors.com/about-us/people/nisha-golcha");
    expect(nisha?.photoUrl).toContain("nisha-golcha-headshot");
    expect(jim?.website).toBe("https://meetjimblack.com/");
    expect(michael?.website).toBe("https://www.brymar.cpa/aboutus");
    expect(kimLe?.website).toBe("https://kimleecpas.com/");
    expect(saraMajumder?.website).toBe("https://sfbaycpa.biz/");
    expect(kimGaxiola?.website).toBe("https://www.resilientplanning.com/team/kim-gaxiola");
    expect(mikeLee?.website).toBe("https://www.edwardjones.com/us-en/financial-advisor/mike-lee");
    expect(jasonPapier?.website).toBe("https://www.wrpwealth.com/who-we-are/");
    expect(zachSmith?.website).toBe("https://www.brightonjones.com/team/zach-smith-cfp/");
    expect(christinaGorokhovsky?.website).toBe("https://gorokhovskylaw.com/");
    expect(saraHire?.website).toBe("https://www.lathropgpm.com/team/sara-hire/");
    expect(adamFerguson?.website).toBe("https://ferglawgroup.com/team/adam-ferguson/");
    expect(brigitteBinkert?.website).toBe("https://www.binkertgreenelaw.com/");
    expect(lydiaHsu?.website).toBe("https://www.fosterhsu.com/about/lydia-e-hsu/");
    expect(meghanHerning?.website).toBe("https://www.jkzllp.com/attorney/herning-meghan/");
    expect(patriciaZerbini?.website).toBe("https://hooverkrepelka.com/attorney/zerbini-patricia-m/");
    expect(karaFoster?.website).toBe("https://www.fosterhsu.com/about/kara-n-foster/");
    expect(bauLinYueh?.website).toBe("https://www.linkedin.com/in/bau-lin-yueh-bb43576/");
    expect(benJonas?.website).toBe("https://www.hubinternational.com/");
    expect(patrickWhitaker?.website).toBe("https://www.whitakerfs.com/team/patrick-whitaker");
    expect(angeloDeSando?.website).toBe("https://desandoins.com/");
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
    expect(mike?.photoUrl).toContain("mike-lee-headshot");
    expect(zach?.photoUrl).toContain("zach-smith-headshot");
    expect(meghan?.photoUrl).toContain("meghan-herning-headshot");
    expect(patricia?.photoUrl).toContain("patricia-zerbini-headshot");
    expect(kara?.photoUrl).toContain("kara-foster-headshot");
    expect(angelo?.photoUrl).toContain("angelo-desando-headshot");
    expect(saraMajumder?.photoUrl).toContain("sara-majumder-headshot");
  });
});
