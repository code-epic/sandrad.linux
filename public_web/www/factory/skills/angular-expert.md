# ANGULAR-EXPERT SKILL

## Identificación

- **Nombre**: Angular-Expert
- **Tipo**: Skill Técnica
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/skills/angular-expert.md`

## Descripción

Skill especializada en Angular, utilizada por Sandra Console y todos los proyectos Products (gdoc y app_web).

## Convenciones de Código

### Imports

```typescript
// 1. Angular core
import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

// 2. Angular material o terceros
import { MatTableModule } from '@angular/material/table';
import { FormsModule } from '@angular/forms';

// 3. Local (alfabético)
import { UserService } from './services/user.service';
import { UserModel } from './models/user.model';
```

### Naming

- **Archivos**: kebab-case (`user-profile.component.ts`)
- **Clases**: PascalCase (`UserProfileComponent`)
- **Variables/Funciones**: camelCase (`getUserData`)
- **Constantes**: UPPER_SNAKE_CASE (`API_BASE_URL`)

### Standalone Components

```typescript
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="profile">
      <h1>{{ user.name }}</h1>
      <p>{{ user.email }}</p>
    </div>
  `,
  styles: [`
    .profile {
      padding: 1rem;
    }
  `]
})
export class UserProfileComponent implements OnInit {
  private userService = inject(UserService);
  user: UserModel | null = null;

  ngOnInit(): void {
    this.loadUser();
  }

  private loadUser(): void {
    this.userService.getUser().subscribe(user => {
      this.user = user;
    });
  }
}
```

### Services

```typescript
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private http = inject(HttpClient);
  private readonly API_URL = '/api/users';

  getUser(id: string): Observable<UserModel> {
    return this.http.get<UserModel>(`${this.API_URL}/${id}`);
  }

  saveUser(user: UserModel): Observable<UserModel> {
    return this.http.post<UserModel>(this.API_URL, user);
  }
}
```

### Signals (Angular 16+)

```typescript
import { Component, signal, computed } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <p>Count: {{ count() }}</p>
    <p>Doubled: {{ doubled() }}</p>
    <button (click)="increment()">+</button>
  `
})
export class CounterComponent {
  count = signal(0);
  doubled = computed(() => this.count() * 2);

  increment(): void {
    this.count.update(c => c + 1);
  }
}
```

### Tipos e Interfaces

```typescript
// Interfaz preferida a 'any'
export interface UserModel {
  id: string;
  name: string;
  email: string;
  roles: UserRole[];
}

export type UserRole = 'admin' | 'user' | 'guest';

// Tipo para respuestas API
export interface ApiResponse<T> {
  data: T;
  status: 'success' | 'error';
  message?: string;
}
```

## Estructura de Proyecto

```
angular/code-epic.io/v2consola/
├── src/
│   ├── app/
│   │   ├── core/
│   │   │   ├── services/
│   │   │   ├── guards/
│   │   │   └── interceptors/
│   │   ├── shared/
│   │   │   ├── components/
│   │   │   └── pipes/
│   │   ├── features/
│   │   │   ├── login/
│   │   │   └── dashboard/
│   │   └── app.component.ts
│   ├── environments/
│   └── styles/
├── angular.json
├── package.json
└── tsconfig.json
```

## Comandos Útiles

```bash
# Desarrollo
npm run start
ng serve

# Build
npm run build:prod

# Tests
npm run test
ng test --include='**/component.spec.ts'

# Lint
npm run lint
ng lint

# Generate
ng generate component feature/user-profile
ng generate service core/services/auth
```

## Manejo de Errores en HTTP

```typescript
import { catchError, throwError } from 'rxjs';

getData(): Observable<Data> {
  return this.http.get<Data>(this.apiUrl).pipe(
    catchError(error => {
      console.error('Error fetching data:', error);
      return throwError(() => error);
    })
  );
}
```

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Proyectos: `angular/code-epic.io/v2consola/`, `angular/products/*/`
