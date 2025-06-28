const database = require('mongoose');

const connectToDatabase = async () => {
    try {
        const DB = await database.connect(process.env.DATABASE_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`✅ DATABASE CONNECTED: ${DB.connection.host}`);

    } catch (error) {
        console.error('❌ DATABASE CONNECTION FAILED:', error.message);
        process.exit(1); // إنهاء التطبيق في حالة الفشل

    }
};

module.exports = connectToDatabase;