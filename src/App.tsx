
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import GeneratedLandingPage from "./pages/GeneratedLandingPage";
import { WordPressLandingPage } from "./pages/WordPressLandingPage";
import { WordPressAuthCallback } from "./pages/WordPressAuthCallback";
import { DemoWordPressSite } from "./pages/DemoWordPressSite";
import { DemoWordPressClientSite } from "./pages/DemoWordPressClientSite";
import { PurchaseSuccessPage } from "./components/PurchaseSuccessPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <div className="min-h-screen bg-black">
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/generated-landing-page" element={<GeneratedLandingPage />} />
            <Route path="/wordpress-landing-page" element={<WordPressLandingPage />} />
            <Route path="/demo-wordpress-site" element={<DemoWordPressSite />} />
            <Route path="/demo-wordpress-client" element={<DemoWordPressClientSite />} />
            <Route path="/auth/wordpress/callback" element={<WordPressAuthCallback />} />
            <Route path="/purchase-success" element={<PurchaseSuccessPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </div>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
