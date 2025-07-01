
-- Create domain orders table
CREATE TABLE IF NOT EXISTS public.domain_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id TEXT UNIQUE NOT NULL,
  domain TEXT NOT NULL,
  registrar TEXT NOT NULL,
  customer_info JSONB NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create domain payments table
CREATE TABLE IF NOT EXISTS public.domain_payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id TEXT UNIQUE NOT NULL,
  domain TEXT NOT NULL,
  price INTEGER NOT NULL,
  customer_info JSONB NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Create deployments table
CREATE TABLE IF NOT EXISTS public.deployments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  deployment_id TEXT UNIQUE NOT NULL,
  domain TEXT NOT NULL,
  url TEXT NOT NULL,
  integrations JSONB DEFAULT '[]',
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Enable Row-Level Security
ALTER TABLE public.domain_orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.domain_payments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.deployments ENABLE ROW LEVEL SECURITY;

-- Create policies for service role (edge functions)
CREATE POLICY "service_role_all_domain_orders" ON public.domain_orders
  FOR ALL
  USING (true)
  WITH CHECK (true);

CREATE POLICY "service_role_all_domain_payments" ON public.domain_payments
  FOR ALL
  USING (true)
  WITH CHECK (true);

CREATE POLICY "service_role_all_deployments" ON public.deployments
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Create indexes for performance
CREATE INDEX IF NOT EXISTS idx_domain_orders_status ON public.domain_orders(status);
CREATE INDEX IF NOT EXISTS idx_domain_payments_status ON public.domain_payments(status);
CREATE INDEX IF NOT EXISTS idx_deployments_status ON public.deployments(status);
CREATE INDEX IF NOT EXISTS idx_domain_orders_created_at ON public.domain_orders(created_at);
CREATE INDEX IF NOT EXISTS idx_domain_payments_created_at ON public.domain_payments(created_at);
CREATE INDEX IF NOT EXISTS idx_deployments_created_at ON public.deployments(created_at);
