# Akka para Sistemas Concorrentes

## Visão Geral

Akka é um toolkit poderoso para desenvolvimento de sistemas concorrentes, distribuídos e tolerantes a falhas, inspirado no modelo de atores de Erlang. É amplamente utilizado com Scala e Java para construir aplicações escaláveis e resilientes.

## Conceitos Fundamentais

1. **Ator (Actor)**: Entidade que processa mensagens assincronamente, com sua própria caixa de correio (mailbox).
2. **Sistema de Atores (Actor System)**: Contêiner raiz que gerencia criação e supervisão de atores.
3. **Caixa de Correio (Mailbox)**: Armazena mensagens recebidas até serem processadas pelo ator.
4. **Comportamento do Ator**: Define como o ator reage às mensagens, implementado como uma função que pode retornar um novo comportamento.

## Exemplo Básico em Scala

```scala
// Adicionar dependência no build.sbt:
// libraryDependencies += "com.typesafe.akka" %% "akka-actor-typed" % "2.6.16"

import akka.actor.typed.{ActorSystem, Behavior}
import akka.actor.typed.scaladsl.Behaviors

object SimpleActor {
  final case class PrintMessage(message: String)

  def apply(): Behavior[PrintMessage] = Behaviors.receive { (context, message) =>
    context.log.info("Received message: {}", message.message)
    Behaviors.same
  }
}

object Main extends App {
  val system: ActorSystem[SimpleActor.PrintMessage] =
    ActorSystem(SimpleActor(), "simpleActorSystem")

  system ! SimpleActor.PrintMessage("Hello, Akka!")
  system ! SimpleActor.PrintMessage("Another message")

  system.terminate()
}
```

## Supervisão e Tratamento de Falhas

Akka permite definir estratégias de supervisão para lidar com falhas:

```scala
object SupervisorExample {
  final case class RiskyMessage(value: Int)

  val riskyActor: Behavior[RiskyMessage] = Behaviors.receive { (context, message) =>
    if (message.value < 0) throw new IllegalArgumentException("Negative value not allowed")
    context.log.info("Processed message: {}", message.value)
    Behaviors.same
  }

  val supervisedBehavior: Behavior[RiskyMessage] =
    Behaviors.supervise(riskyActor)
      .onFailure[IllegalArgumentException](SupervisorStrategy.restart)
}
```

## Benefícios do Akka

- Modelo de programação concorrente poderoso e flexível
- Tolerância a falhas através de estratégias de supervisão
- Escalabilidade para sistemas distribuídos
- Integração com outros recursos como roteamento de mensagens e clusters

Akka é uma ferramenta essencial para desenvolvedores que trabalham com sistemas concorrentes e distribuídos em Scala ou Java.
