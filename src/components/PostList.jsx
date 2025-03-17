import { Avatar, Button, Card, Meta } from "antd";
import './PostList.css'; // importando o css

//const { Meta } = Card;

const postsMock = [
    {
        id: 1, 
        titulo: "Primeiro Post",
        sumary: "Esse é um resumo do primeiro post",
        autor: "João",
        data: "01/01/2021"
    }, 
    {
        id: 2,
        titulo: "Segundo post",
        sumary: "Esse é um resumo do segundo post",
        autor: "José",
        data: "05/06/2023"
    }, 
    {
        id: 3,
        titulo: "Terceiro Post",
        sumary: "Esse é um resumo do terceiro post",
        autor: "Maria",
        data: "15/08/2026"
    }
]

const PostList = () => {
    return (
        <div className="post-list-container">
            {postsMock.map((post) => (
                <Card key={post.id} hoverable style={{ borderRadius: '8px', marginBottom: '20px'}}>
                    <Meta
                        avatar={<Avatar src="https>//api.dicebar.com/7.x/miniavs/svg?seed=8" />}
                        title={post.titulo}
                        description={post.sumary}
                    />
                    <div className="card-footer">
                        <span>{post.autor} - {post.data}</span>
                        <Button type="primary"> Leia Mais </Button>
                    </div>
                </Card>
            ))}
        </div>
    )
}

export default PostList;