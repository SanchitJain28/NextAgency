import { Metadata } from "next";
import { PortfolioViewer } from "@/components/portfolio/portfolio-viewer";
import { Header } from "@/components/header-footer/Header";
import Footer from "@/components/header-footer/Footer";

export const metadata: Metadata = {
  title: "Portfolio — ScaleFront",
  description:
    "Explore our recent Shopify builds, before and after transformations.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioViewer />
    </>
  );
}
