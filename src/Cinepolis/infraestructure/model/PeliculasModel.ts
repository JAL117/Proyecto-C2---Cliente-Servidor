import { Table , Column , DataType ,Model } from "sequelize-typescript";

@Table({
    tableName:"Peliculas",
    timestamps: false
})

class UsuarioModel extends Model{
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
        type : DataType.INTEGER,
        allowNull: false
    })
    public like! : number;

    @Column({
        type: DataType.INTEGER,
        allowNull: false
    })
    public dislike! :number;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false
    })
    public destacado! : boolean;

  


}

export default UsuarioModel;