import assert from "node:assert/strict";
import test from "node:test";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import CookieConsent from "../src/components/shared/CookieConsent";

test("CookieConsent renders nothing during server-side rendering to prevent hydration mismatch", () => {
  const html = renderToStaticMarkup(createElement(CookieConsent));
  // Mounted state is false on initial SSR, returning null
  assert.equal(html, "");
});
