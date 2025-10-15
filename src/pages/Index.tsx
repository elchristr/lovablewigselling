import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { SupplierPreview } from "@/components/SupplierPreview";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { ProductsGallery } from "@/components/ProductsGallery";
import { ValueStack } from "@/components/ValueStack";
import { SuccessStats } from "@/components/SuccessStats";
import { CountdownSection } from "@/components/CountdownSection";
import { TransformationSection } from "@/components/TransformationSection";
import { FinalCTA } from "@/components/FinalCTA";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <SupplierPreview />
      <TestimonialsSection />
      <ProductsGallery />
      <ValueStack />
      <SuccessStats />
      <CountdownSection />
      <TransformationSection />
      <FinalCTA />
    </div>
  );
};

export default Index;
