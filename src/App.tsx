
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import Index from "./pages/Index";
import GeneratedLandingPage from "./pages/GeneratedLandingPage";
import WordPressLandingPage from "./pages/WordPressLandingPage";
import WordPressAuthCallback from "./pages/WordPressAuthCallback";
import DemoWordPressSite from "./pages/DemoWordPressSite";
import DemoWordPressClientSite from "./pages/DemoWordPressClientSite";
import NotFound from "./pages/NotFound";
import ApiSettings from "./components/ApiSettings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/generated/:id" element={<GeneratedLandingPage />} />
            <Route path="/wordpress-page/:id" element={<WordPressLandingPage />} />
            <Route path="/wordpress-auth-callback" element={<WordPressAuthCallback />} />
            <Route path="/demo-wordpress" element={<DemoWordPressSite />} />
            <Route path="/demo-client/:clientId" element={<DemoWordPressClientSite />} />
            <Route path="/api-settings" element={<ApiSettings />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
