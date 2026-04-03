# FLUTTER-EXPERT SKILL

## Identificación

- **Nombre**: Flutter-Expert
- **Tipo**: Skill Técnica
- **Versión**: 1.0.0
- **Fecha**: 28/03/2026
- **Ubicación**: `/Users/crash/dev/orquestador/skills/flutter-expert.md`

## Descripción

Skill especializada en Flutter, utilizada por el proyecto Sandra Contab ERP.

## Convenciones de Código

### Estructura de Proyecto

```
flutter/sandra_contab_erp/
├── lib/
│   ├── main.dart
│   ├── app/
│   │   ├── app.dart
│   │   ├── routes.dart
│   │   └── theme.dart
│   ├── core/
│   │   ├── constants/
│   │   ├── errors/
│   │   └── utils/
│   ├── data/
│   │   ├── models/
│   │   ├── repositories/
│   │   └── datasources/
│   ├── domain/
│   │   ├── entities/
│   │   ├── repositories/
│   │   └── usecases/
│   └── presentation/
│       ├── pages/
│       ├── widgets/
│       └── blocs/
├── pubspec.yaml
└── README.md
```

### Widgets

```dart
import 'package:flutter/material.dart';

class UserCard extends StatelessWidget {
  final User user;
  
  const UserCard({super.key, required this.user});
  
  @override
  Widget build(BuildContext context) {
    return Card(
      child: ListTile(
        leading: CircleAvatar(
          child: Text(user.name[0]),
        ),
        title: Text(user.name),
        subtitle: Text(user.email),
        trailing: const Icon(Icons.arrow_forward_ios),
        onTap: () => Navigator.push(
          context,
          MaterialPageRoute(
            builder: (_) => UserDetail(user: user),
          ),
        ),
      ),
    );
  }
}
```

### State Management con BLoC

```dart
// Event
abstract class UserEvent {}

class LoadUsers extends UserEvent {}

class RefreshUsers extends UserEvent {}

// State
@immutable
abstract class UserState {}

class UserInitial extends UserState {}

class UserLoading extends UserState {}

class UserLoaded extends UserState {
  final List<User> users;
  UserLoaded(this.users);
}

class UserError extends UserState {
  final String message;
  UserError(this.message);
}

// BLoC
class UserBloc extends Bloc<UserEvent, UserState> {
  final UserRepository repository;
  
  UserBloc({required this.repository}) : super(UserInitial()) {
    on<LoadUsers>(_onLoadUsers);
    on<RefreshUsers>(_onRefreshUsers);
  }
  
  Future<void> _onLoadUsers(
    LoadUsers event,
    Emitter<UserState> emit,
  ) async {
    emit(UserLoading());
    try {
      final users = await repository.getUsers();
      emit(UserLoaded(users));
    } catch (e) {
      emit(UserError(e.toString()));
    }
  }
}
```

### Modelos de Datos

```dart
class User {
  final String id;
  final String name;
  final String email;
  final DateTime createdAt;
  
  const User({
    required this.id,
    required this.name,
    required this.email,
    required this.createdAt,
  });
  
  factory User.fromJson(Map<String, dynamic> json) {
    return User(
      id: json['id'] as String,
      name: json['name'] as String,
      email: json['email'] as String,
      createdAt: DateTime.parse(json['created_at'] as String),
    );
  }
  
  Map<String, dynamic> toJson() {
    return {
      'id': id,
      'name': name,
      'email': email,
      'created_at': createdAt.toIso8601String(),
    };
  }
}
```

## Comandos Útiles

```bash
# Desarrollo
flutter run
flutter run -d chrome

# Build
flutter build apk
flutter build ios
flutter build web

# Análisis
flutter analyze
dart analyze

# Tests
flutter test
```

## Configuración pubspec.yaml

```yaml
name: sandra_contab_erp
description: ERP Contable para Venezuela

environment:
  sdk: '>=3.0.0 <4.0.0'

dependencies:
  flutter:
    sdk: flutter
  flutter_bloc: ^8.1.3
  dio: ^5.0.0
  get_it: ^7.6.0
  equatable: ^2.0.5

dev_dependencies:
  flutter_test:
    sdk: flutter
  flutter_lints: ^2.0.0
  bloc_test: ^9.1.3
  mocktail: ^1.0.0
```

## Referencias

- Agente padre: `agents/SANDRA_FACTORY.md`
- Proyecto: `flutter/sandra_contab_erp/`
