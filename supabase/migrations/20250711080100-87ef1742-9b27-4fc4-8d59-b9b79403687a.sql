-- Create storage bucket for about section images
INSERT INTO storage.buckets (id, name, public) VALUES ('about-images', 'about-images', true);

-- Create policies for about images
CREATE POLICY "About images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'about-images');

CREATE POLICY "Anyone can upload about images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'about-images');

CREATE POLICY "Anyone can update about images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'about-images');

CREATE POLICY "Anyone can delete about images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'about-images');