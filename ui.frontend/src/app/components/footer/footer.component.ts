import { MapTo } from '@adobe/aem-angular-editable-components';
import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from '../counter/counter.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
    @ViewChild('counter', { read: CounterComponent })
    counter: CounterComponent;

    counterState = 'counter is ticking';

    constructor() {}

    ngOnInit(): void {
        this.counter.startAt = 180;
        this.counter.counterState.subscribe((msg) => {
            if (msg === 'COMPLETE') {
                this.counterState = 'counter has stopped';
            }
        });

        this.counter.start();
    }
}

MapTo('angularapp/components/footer-component')(FooterComponent);

// TELA 2
// - Temperatura deve ser acessada por requisição de API com localização definida pela localização do usuário que fez o login.
// - Contador: começa em 180 segundos quando logada a página, quando zerar deve fazer automaticamente o logout.
// - Botão “continuar navegando” reseta o contador e retorna aos 180 segundos
// - Botão logout faz o logout e retorna para página inicial.
// - Busca: após algo ser buscado na área de busca será direcionado para a página de perfil do colaborador.
