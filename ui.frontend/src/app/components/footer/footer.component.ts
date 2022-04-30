import { MapTo } from '@adobe/aem-angular-editable-components';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CounterComponent } from '../counter/counter.component';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, AfterViewInit {
    @ViewChild(CounterComponent, { static: false })
    counter: CounterComponent;

    counterState = 'counter is ticking';

    constructor(private router: Router) {}

    ngOnInit(): void {}

    ngAfterViewInit(): void {
        this.counter.startAt = 180;
        this.counter.start();
    }

    keepBrowsing(): void {
        this.counter.reset = true;
        this.counter.stop();
        this.counter.start();
    }

    logout(): void {
        this.counter.stop();
        this.router.navigate(['/content/angularapp/us/en/login.html']);
    }
}

MapTo('angularapp/components/footer-component')(FooterComponent);

// TELA 2
// - [ok] Temperatura deve ser acessada por requisição de API com localização definida pela localização do usuário que fez o login.
// - [ok] Contador: começa em 180 segundos quando logada a página, quando zerar deve fazer automaticamente o logout.
// - [ok] Botão “continuar navegando” reseta o contador e retorna aos 180 segundos
// - [ok] Botão logout faz o logout e retorna para página inicial.
// - Busca: após algo ser buscado na área de busca será direcionado para a página de perfil do colaborador.
