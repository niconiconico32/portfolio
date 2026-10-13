import type { en } from './en'

export const es: typeof en = {
  common: {
    back: '← Volver',
    backToProjects: '← Proyectos',
  },
  home: {
    name: 'Nicolas Gomez',
    subtitle: 'Ingeniero de Producto',
    seeProjects: 'Ver proyectos',
    aboutMe: 'Sobre mí',
  },
  aboutMe: {
    title: 'Ingeniero de Producto · Full-Stack y Móvil',
    tagline:
      'Construyo y lanzo productos web y móviles basados en suscripción, combinando ingeniería de software, estrategia de producto y storytelling.',
    description:
      'Periodista convertido en ingeniero de software, enfocado en construir productos centrados en el usuario con React, React Native, TypeScript, Python y Supabase, desde la investigación inicial y UX hasta pagos, despliegue y crecimiento.',
    educationLabel: 'Educación',
    education: [
      {
        degree: 'Periodismo',
        institution: 'Universidad de Santiago de Chile',
        dates: '2014 — 2019',
      },
      {
        degree: 'Ciencias de la Computación',
        institution: 'Duoc UC',
        dates: '2023 — 2026',
      },
    ],
    skillsLabel: 'Habilidades',
    skills: [
      {
        specialty: 'Producto',
        items: ['Ingeniería de Producto', 'Estrategia de Producto', 'Redacción UX'],
      },
      { specialty: 'Móvil', items: ['React Native', 'Expo', 'TypeScript'] },
      { specialty: 'Web', items: ['React', 'HTML', 'CSS', 'JavaScript'] },
      {
        specialty: 'Backend',
        items: ['Supabase', 'PostgreSQL', 'SQL', 'Edge Functions', 'RLS'],
      },
      {
        specialty: 'Suscripción',
        items: ['RevenueCat', 'Stripe Billing', 'Identidad Web-to-App'],
      },
      {
        specialty: 'Entrega',
        items: ['Playwright', 'GitHub', 'App Store', 'Google Play'],
      },
    ],
  },
  brainy: {
    title: 'Brainy — Un sistema pensado para el TDAH: empezar, no solo planificar',
    role: 'Ingeniero de Producto · Móvil, Web-to-App e Infraestructura de Suscripciones',
    intro: [
      'Construí Brainy en torno a un problema más acotado que la “productividad”: empezar una tarea cuando ya sabes lo que hay que hacer pero aun así te sientes bloqueado.',
      'En lugar de presentar otra larga lista de tareas, Brainy descompone el trabajo en pasos manejables y entrega retroalimentación visual inmediata mediante rutinas, recompensas y un compañero en pixel-art que evoluciona con el progreso del usuario.',
    ],
    evidence: {
      heading: 'Evidencia',
      items: [
        '**Más de 1K descargas públicas** en Google Play.',
        'Disponible en **iOS y Android**.',
        'Localizado en **6 idiomas** en el App Store.',
        'Onboarding personalizado construido a partir de **14 plantillas de rutinas y 16 plantillas de tareas**.',
        'El funnel web y los cambios en producción documentados en un [repositorio público de GitHub](https://github.com/niconiconico32/brainy-web).',
        'Desarrollo activo hasta **marzo de 2026**, incluyendo actualizaciones de localización, facturación y onboarding.',
      ],
      links:
        '[Producto en vivo](https://brainyadhd.com/) · [App Store](https://apps.apple.com/cl/app/brainy-tdah-tareas-y-h%C3%A1bitos/id6761862417) · [Google Play](https://play.google.com/store/apps/details?id=com.brainyahdh.app) · [Código web](https://github.com/niconiconico32/brainy-web)',
    },
    owned: {
      heading: 'Qué lideré',
      paragraphs: [
        'Trabajé en todo el sistema de producto: desarrollo móvil en React Native, onboarding, modelado de tareas y rutinas, autenticación y datos en Supabase, identidad web-to-app, facturación de suscripciones, validación de entitlements, localización, lanzamientos en tiendas y soporte en producción.',
        'El producto móvil incluye descomposición de tareas, seguimiento de rutinas, captura por voz, widgets de pantalla de inicio y un sistema de progresión donde completar rutinas desarrolla un compañero virtual.',
      ],
    },
    architecture: {
      heading: 'Decisiones de arquitectura',
      blocks: [
        {
          heading: 'Un funnel de adquisición sin build.',
          body: 'Mantuve el funnel web en HTML, CSS y JavaScript sin pipeline de build de frontend. El funnel necesitaba ser fácil de auditar y rápido de desplegar; las operaciones con estado y privilegios quedaron detrás de Supabase Edge Functions.',
        },
        {
          heading: 'Una sola identidad desde el checkout hasta el móvil.',
          body: 'El UUID del usuario de Supabase también se usa como App User ID de RevenueCat. Evité tratar el email como una identidad duradera porque el matching por email se vuelve inseguro cuando las compras se reintentan, se restauran o se abren en otro dispositivo.',
        },
        {
          heading: 'Facturación y acceso son responsabilidades separadas.',
          body: 'Stripe gestiona la facturación, RevenueCat representa el entitlement de la suscripción, y Supabase es dueño de la identidad del usuario y los datos de la aplicación. Una redirección exitosa del navegador nunca es suficiente para otorgar acceso: el entitlement se verifica antes de asociar un plan comprado a una cuenta.',
        },
        {
          heading: 'Recuperación por HTTPS en vez de deep links frágiles.',
          body: 'La recuperación de contraseña se completa en la web con una sesión de Supabase de corta duración. Esto evita comportamientos de callback distintos entre Expo Go, builds de desarrollo y apps en producción.',
        },
        {
          heading: 'Gestión de suscripciones alojada.',
          body: 'En lugar de implementar lógica de cancelación propia, Brainy envía a los usuarios al portal de clientes alojado de Stripe. Eso redujo la cantidad de código de facturación sensible que el producto debía mantener.',
        },
      ],
      closing:
        'El release de Stripe Live pasó **15/15 suites de regresión**, incluyendo escenarios de identidad, recuperación de planes, paywall, gestión de suscripciones y rotación de claves. [Ver el commit del release →](https://github.com/niconiconico32/brainy-web/commit/8e9225cc24ffcf19d579a7ce8c6490197f5e92c8)',
    },
    boundary: {
      heading: 'Un límite honesto',
      body: 'Brainy no diagnostica ni trata el TDAH. Es un producto diseñado en torno a la fricción para iniciar tareas y las necesidades de la función ejecutiva. Soy cuidadoso de no convertir una hipótesis de producto —o una interfaz pulida— en una afirmación médica.',
    },
    footer: {
      stack:
        '**Stack:** React Native, Expo, TypeScript, Supabase, PostgreSQL, Edge Functions, RevenueCat, Stripe, HTML, CSS y JavaScript.',
      lastActive: '**Última actividad:** octubre de 2026.',
    },
  },
  rin: {
    title: 'RIN — Un funnel web-to-app que entrega un producto configurado',
    role: 'Ingeniero de Producto · Onboarding Personalizado, Móvil y Sistemas de Suscripción',
    intro: [
      'RIN es un producto de hábitos inspirado en el anime para hombres que quieren mejorar su disciplina, foco, condición física y confianza.',
      'El problema de ingeniería interesante no era el checklist de hábitos. Era lograr que adquisición, personalización, pago y la primera sesión móvil se comportaran como un solo producto continuo.',
      'Un usuario completa el diagnóstico y elige un plan en la web. Cuando entra a la app, sus hábitos y personajes ya lo están esperando.',
    ],
    system: {
      heading: 'Sistema de producto',
      items: [
        'Diagnóstico conductual de **6 preguntas**.',
        '**18 hábitos canónicos** en cuatro categorías de mejora.',
        'Un plan personalizado con **6 hábitos seleccionados**.',
        '**6 arquetipos de personaje**, asignados sin repetición.',
        '**20 niveles de progresión** organizados en **4 formas de evolución visual**.',
        'Cuentas persistentes que conservan el plan cuando el usuario cambia de teléfono.',
        'Un entitlement de suscripción compartido entre la web y la app móvil.',
      ],
      links:
        '[Explora el funnel en vivo](https://tryrin.com/) · [Privacidad y datos del producto](https://tryrin.app/privacy)',
    },
    owned: {
      heading: 'Qué lideré',
      paragraphs: [
        'Diseñé y construí el funnel web, el traspaso al móvil, el modelo de hábitos y personajes, el ciclo de vida de la cuenta, el flujo de suscripción y la infraestructura de emails transaccionales.',
        'El sistema conecta un onboarding web personalizado con una aplicación React Native usando Supabase, RevenueCat, Stripe y Resend.',
      ],
    },
    architecture: {
      heading: 'Decisiones de arquitectura',
      blocks: [
        {
          heading: 'El onboarding web es parte del producto.',
          body: 'Usé el funnel para realizar el trabajo cognitivamente costoso —diagnóstico, selección de hábitos y emparejamiento de personajes— antes de la primera sesión en la app. Así la experiencia móvil puede empezar con acción en lugar de otra pantalla de configuración vacía.',
        },
        {
          heading: 'El resultado del checkout no autoriza al usuario.',
          body: 'RIN no confía en una URL de éxito ni en un flag de compra del lado del cliente. El backend verifica el entitlement de RevenueCat antes de finalizar el plan y escribir los hábitos personalizados en la cuenta del usuario.',
        },
        {
          heading: 'Identificadores canónicos en todas las capas.',
          body: 'Los mismos seis identificadores de personaje se usan en el funnel web, PostgreSQL y la aplicación móvil. Elegí esto en vez de mantener mapeos separados de nombres visibles, que ya habían creado el riesgo de que los planes llegaran al móvil con un personaje indefinido.',
        },
        {
          heading: 'El acceso entre dispositivos dio forma al flujo de autenticación.',
          body: 'Un plan anónimo ligado al dispositivo habría producido una demo más simple, pero fallaría en cuanto alguien cambiara de teléfono. RIN persiste la identidad a través de Supabase Auth y asocia el plan comprado con esa cuenta.',
        },
        {
          heading: 'Cada servicio tiene una responsabilidad acotada.',
          items: [
            'Supabase es dueño de la identidad, los datos en PostgreSQL y la finalización del plan.',
            'Stripe procesa la facturación web.',
            'RevenueCat expone el entitlement de la suscripción a web y móvil.',
            'Resend entrega el email transaccional de la cuenta.',
            'React Native y Expo proveen el cliente móvil.',
          ],
        },
      ],
      closing:
        'La recuperación de contraseña se completa deliberadamente mediante un flujo web HTTPS en lugar de un deep link de la app, reduciendo el comportamiento de callback específico de cada entorno y manteniendo la recuperación funcional incluso cuando la app no está instalada.',
    },
    status: {
      heading: 'Estado actual',
      body: 'El funnel web está en vivo y el build de iOS se envió a revisión del App Store en **octubre de 2026**. RIN está todavía más atrás que Brainy, así que no presento métricas de adopción inventadas ni lo llamo un motor de crecimiento probado. La evidencia hoy es el funnel funcionando, la arquitectura de suscripciones en producción y el traspaso end-to-end hacia la app.',
    },
    footer: {
      stack:
        '**Stack:** React Native, Expo, TypeScript, Supabase, PostgreSQL, Edge Functions, RevenueCat, Stripe y Resend.',
      lastActive: '**Última actividad:** octubre de 2026.',
    },
  },
}
