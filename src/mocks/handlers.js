import { rest } from 'msw';

export const handlers = [
    rest.get('http://localhost:5000/todo', (req, res, ctx) => {
        return res(
            ctx.json([{
                "id": 1,
                "task": "Ir al gym"
            }])
        )
    }),
    rest.post('http://localhost:5000/todo', (req, res, ctx) => {
        return res(
            ctx.json({ success: true })
        )
    }),
    rest.delete('http://localhost:5000/todo/1', (req, res, ctx) => {
        return res(
            ctx.json({ success: true })
        )
    }),
    rest.put('http://localhost:5000/todo/1', (req, res, ctx) => {
        return res(
            ctx.json({ success: true })
        )
    })
]