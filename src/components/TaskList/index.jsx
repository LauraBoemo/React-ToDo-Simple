import { TbClipboardList } from 'react-icons/tb';
import { BsPlusCircle } from 'react-icons/bs';

import { TaskListContainer, InputContainer } from "./styles"

export function TaskList() {
    return (
        <>
            <InputContainer>
                <form>
                    <input
                        placeholder="Adicione uma nova tarefa"
                    >
                    </input>
                    <button>
                        Criar <BsPlusCircle />
                    </button>
                </form>
            </InputContainer>
            <TaskListContainer>
                <header>
                    <h3>
                        Tarefas criadas <span>0</span>
                    </h3>
                    <h3 className="concludedTasks">
                        Concluídas <span>0</span>
                    </h3>
                </header>
                <main>
                    <TbClipboardList 
                        size={80}
                    />
                    <h3>Você ainda não tem tarefas cadastradas</h3>
                    <p>Crie tarefas e organize seus itens a fazer</p>
                </main>
            </TaskListContainer>
        </>
    )
} 