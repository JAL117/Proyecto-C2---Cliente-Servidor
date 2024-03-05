import { Table , Column , DataType ,Model } from "sequelize-typescript";

@Table({
    tableName:"UsuariosPe",
    timestamps: false
})

class UsuarioModel extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true
    })
    public id!:number;
    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    public nombre! : string;
    @Column({
        type : DataType.STRING,
        allowNull: false
    })
    public password! : string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    public usuario! : string;

    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    public correo! : string;

  


}

export default UsuarioModel;