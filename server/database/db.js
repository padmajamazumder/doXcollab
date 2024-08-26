import mongoose  from 'mongoose';

const Connection = async (username = 'usercode', password = 'codeforinterview') => {
    const URL = `mongodb+srv://padmajamazumder:hQsC2iDmfxX5kPCq@cluster0.9eoob.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
`;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true });
        console.log('Database connected successfully');
    } catch (error) {   
        console.log('Error while connecting with the database ', error);
    }
}

export default Connection;