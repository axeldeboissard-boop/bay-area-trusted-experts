import { describe, expect, it } from "vitest";
import { resolveNetworkAccess } from "./memberAccess";

describe("resolveNetworkAccess", () => {
  it("grants project administrators member-network access", () => {
    expect(resolveNetworkAccess({ role: "admin" })).toBe("active");
  });

  it("keeps an unauthorised professional pending until activated", () => {
    expect(resolveNetworkAccess({ role: "user" })).toBe("pending");
  });

  it("preserves suspended member status", () => {
    expect(resolveNetworkAccess({ role: "user" }, { accessStatus: "suspended" })).toBe("suspended");
  });
});
