export class BlogPost {
    public postId?: number;
    public creator: string;
    public title: string;
    public body: string;
    public dt: Date;

    constructor(postId: number, creator: string, title: string, body: string, dt: Date) {
        this.postId = postId,
            this.creator = creator,
            this.title = title,
            this.body = body,
            this.dt = dt;
    }
}