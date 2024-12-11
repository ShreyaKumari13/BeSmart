-- Create the analysis_requests table
CREATE TABLE IF NOT EXISTS analysis_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    query TEXT NOT NULL,
    type VARCHAR(50),
    category VARCHAR(50),
    status VARCHAR(20) DEFAULT 'pending',
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()),
    result JSONB
);

-- Enable Row Level Security (RLS)
ALTER TABLE analysis_requests ENABLE ROW LEVEL SECURITY;

-- Create a policy that allows all operations for now
-- You can make this more restrictive based on your needs
CREATE POLICY "Enable all operations for all users" ON analysis_requests
    FOR ALL
    USING (true)
    WITH CHECK (true);
