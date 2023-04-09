import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event";
import App from '../App';
import Tasks from "../components/tasks/Tasks";

describe('form test', () => {
    test('if get all tasks', async () =>{
        render(<Tasks/>);
        const tasks = await screen.findByText(/ir al gym/i);  
        expect(tasks).toBeInTheDocument();
    });
    test('create new task', async () => {
        render(<App/>);
        const input = screen.getByLabelText('Crear tarea');
        userEvent.type(input, 'Bañar al gato');

        const button = screen.getByRole('button', {name: /Crear tarea/i});
        userEvent.click(button);

        const alert = await screen.findByText('Tu tarea ha sido creada correctamente');
        expect(alert).toBeInTheDocument();
    });

    test('delete task', async () => {
        render(<Tasks/>);
        const tasks = await screen.findByText(/ir al gym/i);  
        expect(tasks).toBeInTheDocument();
        
        const deleteButton = screen.getByRole('button', {name: /bt-delete/i})
        userEvent.click(deleteButton);

        const confirmation = screen.getByRole('button', {name: /¡Si, bórrala!/i});
        userEvent.click(confirmation);

        const alert = await screen.findByText('Tu tarea ha sido borrada');
        expect(alert).toBeInTheDocument();

        //screen.debug();
    });

    test('update task', async () => {
        render(<Tasks/>);
        const tasks = await screen.findByText(/ir al gym/i);  
        expect(tasks).toBeInTheDocument();

        const editButton = screen.getByRole('button', {name: /bt-edit/i});
        userEvent.click(editButton);

        const input = screen.getByLabelText('Crear tarea');
        userEvent.clear(input);
        userEvent.type(input, 'Bañar al gato');

        const submitButton = screen.getByRole('button', {name: /Editar tarea/i });
        userEvent.click(submitButton);
        
        const editedTask = await screen.findByText(/Bañar al gato/i);
        expect(editedTask).toBeInTheDocument();

        const alert = await screen.findByText('Tu tarea ha sido editada correctamente');
        expect(alert).toBeInTheDocument();

        //screen.debug();
    });
})