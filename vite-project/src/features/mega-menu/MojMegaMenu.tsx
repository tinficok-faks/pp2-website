import { MegaMenu } from 'primereact/megamenu';
import type { MenuItem } from 'primereact/menuitem';
import { useNavigate } from 'react-router-dom';

export default function MojMenu() {
    const navigate = useNavigate();
    const items: MenuItem[] = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => navigate('/') // route
        },
        {
            label: 'Mini apps',
            icon: 'pi pi-mobile',
            items: [
                [
                    {
                        label: 'Opis mozda?',
                        items: [{
                                    label: 'Calculator', 
                                    icon: 'pi pi-calculator',
                                    command: () => navigate('/calculator')
                                },
                                {
                                    label: 'TicTacToe',
                                    icon: 'pi pi-times-circle',
                                    command: () => navigate('/tictactoe')
                                },
                                {
                                    label: 'testiranje',
                                    command: () => navigate('/testiranje')
                                }
                                ]
                    }
                ],
                [
                    {
                        label: 'Opis isto',
                        items: [{
                                label: 'Weather app',
                                icon: 'pi pi-sun',
                                command: () => navigate('/weather')
                                }, ]
                    }
                ],
                // [
                //     {
                //         label: 'Gaming',
                //         items: [{ label: 'Accessories' }, { label: 'Console' },]
                //     }
                // ]
            ]
        },
        {
            label: 'About',
            icon: 'pi pi-face-smile',
            command: () => navigate('/about')
        },
        {
            label: 'Contact',
            icon: 'pi pi-phone',
            command: () => navigate('/contact')
        }
    ];

    return (
        <div className="card">
            <MegaMenu model={items} orientation='horizontal' breakpoint="960px" />
        </div>
    )
}