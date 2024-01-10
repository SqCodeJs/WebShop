import db from '../config/db';

type Data = {
    id: number;
    title: string;
    price: number;
    description: string;
    image: string;
    cat: string;
    color: string;
    tag: string;

};

export const addProductsToDB = (data: Data[]) => {
    const callback = (data: Data, index: number, arr: Data[]) => {
        const { id, title, price, description, image, cat: category, color, tag } = data;
        const stock = 50;
        const sold = 0;

        const sqlInsert =
            "INSERT INTO Products (id, title, price, description, image, category,color,tag, stock, sold) VALUES (?,?,?,?,?,?,?,?,?,?)";
        db.query(sqlInsert, [id, title, price, description, image, category, color, tag, stock, sold], (error, result) => {
            if (error) {
                console.error('Błąd SQL:', error);
                throw error;
            }
        });

    };
    
    data.map(callback);
};