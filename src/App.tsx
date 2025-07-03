
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import GeneratedLandingPage from "./pages/GeneratedLandingPage";
import NotFound from "./pages/NotFound";
import { WordPressLandingPage } from '@/pages/WordPressLandingPage';

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/generated-landing-page" element={<GeneratedLandingPage />} />
            <Route path="/wordpress-site" element={<WordPressLandingPage />} />
            <Route path="/wordpress-admin" element={<WordPressLandingPage />} />
            <Route path="/wordpress-login" element={<WordPressLandingPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
