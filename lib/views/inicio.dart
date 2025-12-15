import 'package:flutter/material.dart';

void main() {
  runApp(const Inicio());
}

class Inicio extends StatelessWidget {
  const Inicio({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Tienda Segura',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: const Color.fromARGB(255, 0, 220, 179),
        ),
      ),
      home: const Scaffold(
        body: Center(child: Text('Bienvenido a Tienda Segura')),
      ),
    );
  }
}
