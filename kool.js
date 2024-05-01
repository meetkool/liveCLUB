const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createFullTextIndex() {
    try {
        const result = await prisma.$executeRaw`CREATE INDEX idx_stream_name_fulltext ON "Stream" USING GIN (to_tsvector('english', name));`;
        console.log('Full-text index created:', result);
    } catch (error) {
        console.error('Error creating full-text index:', error);
    } finally {
        await prisma.$disconnect();
    }
}

createFullTextIndex();
