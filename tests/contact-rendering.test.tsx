import assert from "node:assert/strict";
import test from "node:test";
import { load } from "cheerio";
import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { DirectContactChannels } from "../src/components/contact/DirectContactChannels";
import { ContactLink } from "../src/components/contact/ContactLink";
import { CONTACT_INFO } from "../src/config/contact";

test("contact cards render real contact values in the initial server HTML", () => {
  const html = renderToStaticMarkup(createElement(DirectContactChannels));
  assert.ok(html.includes(`href="mailto:${CONTACT_INFO.email}"`));
  assert.equal(load(html)('a[href^="mailto:"] h3').text().trim(), CONTACT_INFO.email);
  assert.ok(html.includes(`href="tel:${CONTACT_INFO.telInternational}"`));
  assert.ok(html.includes(CONTACT_INFO.displayPhone));
  assert.equal(load(html)('a[href^="https://wa.me/"]').attr("href"), CONTACT_INFO.waPrefilled);
  assert.ok(!html.includes("undefined"));
});

test("shared contact links use the hook's canonical WhatsApp URL", () => {
  const html = renderToStaticMarkup(
    createElement(ContactLink, { channel: "whatsapp", children: "Chat" }),
  );
  assert.ok(html.includes(`href="${CONTACT_INFO.waBase}"`));
});
