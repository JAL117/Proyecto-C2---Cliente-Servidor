import { Table , Column , DataType ,Model } from "sequelize-typescript";

@Table({
    tableName:"EventoWebhook",
    timestamps: false
})

class EventoWebhookModel extends Model{
    @Column({
        type: DataType.INTEGER,
        primaryKey: true
    })
    public id! : number;

    @Column({
        type: DataType.STRING,
        allowNull:false
    })
    public url! : string;

    @Column({
        type: DataType.ARRAY(DataType.STRING), // Utiliza ARRAY para almacenar un arreglo de cadenas
        allowNull: false,
      })
      public eventos!: string[];
    
}

export default EventoWebhookModel;