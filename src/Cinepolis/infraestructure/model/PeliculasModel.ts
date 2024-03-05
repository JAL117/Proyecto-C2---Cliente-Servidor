import { Table , Column , DataType ,Model } from "sequelize-typescript";

@Table({
    tableName:"Peliculas",
    timestamps: false
})

class PeliculasModel extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true
    })
    public id! : number;
    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    public titulo! : string;
    @Column({
        type : DataType.STRING,
        allowNull: false
    })
    public director! :string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    public categoria! :string;


  


}

export default PeliculasModel;