const db = require('../models')
const bcrypt = require('bcrypt')

const usersArray = [
  {
    firstName: 'Admin',
    lastName: 'Demo',
    email: 'admin@test.com',
    password: bcrypt.hashSync('12345678', 10),
    image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    firstName: 'Usuario',
    lastName: 'Demo',
    email: 'usuario@test.com',
    password: bcrypt.hashSync('12345678', 10),
    image: 'https://www.designevo.com/res/templates/thumb_small/colorful-hand-and-warm-community.png',
    createdAt: new Date,
    updatedAt: new Date
  }
]
const roles = [
  {
    name: 'Admin',
    description: 'Usuario administrador',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Standard',
    description: 'Usuario regular',
    createdAt: new Date,
    updatedAt: new Date
  }
]
const categories = [
  {
    name: 'demo-category',
    description: 'demo-description',
    createdAt: new Date,
    updatedAt: new Date
  }
]
const entries = [
  {
    name: 'Brindaremos apoyo escolar a alumnos de secundario',
    content: 
`Las clases serán de inglés, matemática y lengua y estarán destinadas a alumnos de nivel secundario. Se desarrollarán en el Dispositivo Territorial Comunitario (DTC) de barrio San Benito, los sábados, de 11 a 13.

Al respecto, María Juncosa, directora del edificio municipal de barrio San Benito, afirmó que “el objetivo de llevar adelante esta iniciativa, es acompañar a aquellos jóvenes que adeudan materias del secundario. Buscamos, de esta manera, poder brindar diferentes servicios que beneficien y respondan a las necesidades de los vecinos”.

Es importante destacar que, quienes estén interesados en participar de las clases sólo deben asistir al edificio municipal para inscribirse.

El apoyo escolar consiste en brindar diferentes herramientas útiles de estudio para aquellas personas a quienes les cuesta aprobar las materias. No busca la excelencia, pero sí la facilidad para retener información.

Tiene como finalidad proporcionar, a los alumnos, un complemento más sencillo a la educación tradicional. Su objetivo, además, es rellenar los huecos que deja la formación del centro escolar.`,

    image: 'https://alkemyong.s3.amazonaws.com/apoyo-escolar-3-1-1024x575 Cropped.jpg',
    categoryId: 1,
    type: 'news',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Higiene personal para niños',
    content: 

`Somos mas llevó a cabo una campaña de higiene personal para niños. La campaña tuvo como objetivo promover buenos hábitos de higiene entre los niños. Las actividades realizadas durante la campaña incluyeron un concurso de elaboración de cartulinas, un quiz sobre higiene personal y una demostración sobre cómo lavarse las manos correctamente. Los niños también recibieron kits de higiene que consisten en un cepillo de dientes, pasta de dientes, jabón y una toalla.

La campaña fue un éxito, los niños mostraron un gran interés en las actividades y aprendieron sobre la importancia de la higiene personal. La campaña contribuirá en gran medida a promover buenos hábitos de higiene entre los niños y les ayudará a mantenerse sanos y limpios.

Se espera que esta campaña marque una diferencia real en la vida de los niños de la comunidad y los ayude a mantenerse saludables y prosperar.`,
    
    image: 'https://alkemyong.s3.amazonaws.com/UNDP-Peru-2016_kids_washing_hands_30882271066 Cropped.jpg',
    categoryId: 1,
    type: 'news',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: '¡Aprendemos a reciclar!',
    content:
`Somos Mas ha lanzado una campaña de educación ambiental y reciclaje para niños. La campaña tiene como objetivo educar a los niños sobre la importancia de reciclar y preservar nuestro medio ambiente. Esperamos inculcarles un sentido de responsabilidad por el medio ambiente e inspirarlos a tomar medidas para protegerlo.

La campaña comienza con una serie de actividades divertidas e interactivas que introducen a los niños a los conceptos de reciclaje y protección del medio ambiente. Aprenderán sobre las diversas formas en que pueden reciclar materiales y la importancia de hacerlo. También se les enseñará sobre los efectos nocivos de la contaminación y cómo se puede prevenir.

Después de las actividades iniciales, los niños realizarán una excursión a una planta de reciclaje local. Verán de primera mano cómo se clasifican y procesan los materiales reciclables. También aprenderán sobre las diferentes formas en que se pueden utilizar los materiales reciclados.

La campaña culminará con un concurso en el que se pedirá a los niños que presenten su propio proyecto de reciclaje. El proyecto ganador será implementado por nuestra ONG, con la ayuda de los niños.

Esperamos que a través de esta campaña podamos inculcar en los niños el amor y el respeto por nuestro medio ambiente, y el deseo de hacer su parte para preservarlo.`,
    
    image: 'https://alkemyong.s3.amazonaws.com/48361815_1950594598349405_886395067080638464_n.jpg',
    categoryId: 1,
    type: 'news',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Nadie merece pasar una noche con hambre',
    content:

`Somos Mas proporciona comidas para personas sin hogar que viven en las calles. Creemos que nadie debería pasar hambre y estamos comprometidos a ayudar a los necesitados. Brindamos una comida caliente y un almuerzo en bolsa a cada persona que servimos. Nuestros voluntarios son el corazón de nuestra organización y su misión es garantizar que todas las personas a las que servimos se sientan valoradas y respetadas.

Cada día, nuestros voluntarios salen a la comunidad para servir nuestras comidas. Llegan a conocer a las personas a las que sirven y establecen relaciones con ellas. Ofrecen una cara amistosa y un oído que escucha, y le hacen saber a la gente que no están solos. Nuestros voluntarios marcan la diferencia en la vida de las personas a las que sirven y hacen de nuestra comunidad un lugar mejor.

Si estás interesado en ser voluntario con nosotros, por favor contáctanos. ¡Nos encantaría que te unas a nuestro equipo!`,

    image: 'https://alkemyong.s3.amazonaws.com/Recorridas-nocturnas-CABA-1 Cropped.jpg',
    categoryId: 1,
    type: 'news',
    createdAt: new Date,
    updatedAt: new Date
  },
]
const activities = [
  {
    name: 'Apoyo Escolar para el nivel Primario',
    image: 'https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80',
    content: '<p>El espacio de apoyo escolar es el corazón del área educativa. Se realizan los talleres de lunes a jueves de 10 a 12 horas y de 14 a 16 horas en el contraturno, Los sábados también se realiza el taller para niños y niñas que asisten a la escuela doble turno.</p><p>Tenemos un espacio especial para los de 1er grado 2 veces por semana ya que ellos necesitan atención especial! Actualmente se encuentran inscriptos a este programa 150 niños y niñas de 6 a 15 años. Este taller está pensado para ayudar a los alumnos con el material que traen de la escuela, también tenemos una docente que les da clases de lengua y matemática con una planificación propia que armamos en Manos para nivelar a los niños y que vayan con más herramientas a la escuela.</p>',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Apoyo Escolar Nivel Secundaria',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=932&q=80',
    content: '<p>Del mismo modo que en primaria, este taller es el corazón del área secundaria. Se realizan talleres de lunes a viernes de 10 a 12 horas y de 16 a 18 horas en el contraturno.</p><p>Actualmente se encuentran inscriptos en el taller 50 adolescentes entre 13 y 20 años. Aquí los jóvenes se presentan con el material que traen del colegio y una docente de la institución y un grupo de voluntarios los recibe para ayudarlos a estudiar o hacer la tarea.</p><p>Este espacio también es utilizado por los jóvenes como un punto de encuentro y relación entre ellos y la institución.</p>',
    createdAt: new Date,
    updatedAt: new Date
  },
  {
    name: 'Tutorías',
    image: 'https://images.unsplash.com/photo-1581726707445-75cbe4efc586?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1176&q=80',
    content: '<p>Es un programa destinado a jóvenes a partir del tercer año de secundaria, cuyo objetivo es garantizar su permanencia en la escuela y construir un proyecto de vida que da sentido al colegio.</p><p>El objetivo de esta propuesta es lograr la integración escolar de niños y jóvenes del barrio promoviendo el soporte socioeducativo y emocional apropiado, desarrollando los recursos institucionales necesarios a través de la articulación de nuestras intervenciones con las escuelas que los alojan, con las familias de los alumnos y con las instancias municipales, provinciales y nacionales que correspondan. El programa contempla:</p><ul><li>Encuentro semanal con tutores (Individuales y grupales)</li><li>Actividad proyecto (los participantes del programa deben pensar una actividad relacionada a lo que quieren hacer una vez terminada la escuela y su tutor los acompaña en el proceso)</li><li>Ayudantías (los que comienzan el 2do años del programa deben elegir una de las actividades que se realizan en la institución para acompañarla e ir conociendo como es el mundo laboral que les espera)</li><li>Acompañamiento escolar y familiar (Los tutores son encargados de articular con la familia y con las escuelas de los jóvenes para monitorear el estado de los tutorados)</li><li>Beca estímulo (los jóvenes reciben una beca estímulo que es supervisada por los tutores). Actualmente se encuentran inscriptos en el programa 30 adolescentes</li><li>Taller Arte y Cuentos: Taller literario y de manualidades que se realiza semanalmente</li><li>Paseos recreativos y educativos: Estos paseos están pensados para promover la participación y sentido de pertenencia de los niños, niñas y adolescentes al área educativa</li></ul>',
    createdAt: new Date,
    updatedAt: new Date
  }
]
const testimonials = [
  {
    name: 'Facundo Carrillo',
    image: 'https://alkemyong.s3.amazonaws.com/Facundo-Carrillo.jpg',
    content: '¡Somos Mas es una gran organización para trabajar! El personal es muy amable y acogedor, y el trabajo es muy gratificante. Siento que estoy marcando una diferencia en la vida de las personas a las que servimos.',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    name: 'Sofia Pedraza',
    image: 'https://alkemyong.s3.amazonaws.com/Sofia-Pedraza.jpg',
    content: 'Trabajar en Somos Más ha sido una experiencia increíblemente gratificante. He tenido la oportunidad de ayudar a marcar la diferencia en la vida de otras personas y ver de primera mano el impacto positivo que ha tenido nuestro trabajo. Es un honor ser parte de una organización que está marcando una diferencia tan positiva en el mundo.',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    name: 'Francisco Sosa',
    image: 'https://alkemyong.s3.amazonaws.com/Francisco-Sosa.jpg',
    content: 'Estoy agradecida de haber tenido la oportunidad de trabajar en Somos Mas. Ha sido un privilegio ayudar a apoyar el increíble trabajo que realizan para brindar educación y oportunidades a los niños desfavorecidos de mi barrio. He visto de primera mano la diferencia que Somos Más hace en la vida de estos niños y estoy orgullosa de haber sido parte de ella.',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    name: 'Nestor Sastre',
    image: 'https://alkemyong.s3.amazonaws.com/Nestor-Sastre.jpg',
    content: 'Estoy muy agradecida de haber tenido la oportunidad de trabajar en Somos Mas. He aprendido mucho y he tenido la oportunidad de ayudar a muchas personas. He conocido personas increíbles que me han inspirado a seguir haciendo un buen trabajo en el mundo.',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    name: 'Maria Pereira',
    image: 'https://alkemyong.s3.amazonaws.com/Maria-Pereira.jpg',
    content: 'Somos Mas me ha dado la oportunidad de ayudar a niños desfavorecidos de mi barrio. He podido ayudarlos a obtener una educación y mejorar su calidad de vida. Estoy muy agradecida por esta oportunidad y continuaré ayudando a estos niños mientras pueda.',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    name: 'Clara Rasso',
    image: 'https://alkemyong.s3.amazonaws.com/Clara-Rasso.jpg',
    content: 'Si está buscando un lugar para realmente marcar la diferencia, Somos Más es la organización perfecta para usted. Llevo más de un año trabajando aquí y ha sido una experiencia increíble. Trabajamos con algunas de las poblaciones más vulnerables de la zona y les brindamos los recursos y el apoyo que tanto necesitan. Estoy muy orgulloso de ser parte de esta organización y no puedo imaginarme haciendo otra cosa.',
    createdAt:new Date,
    updatedAt:new Date
  }

]
const members = [
  {
    name: 'Maria Irola',
    image: '/images/support_01.jpg',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    name: 'Marita Gomez',
    image: '/images/support_02.jpg',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    name: 'Miriam Rodriguez',
    image: '/images/support_03.jpg',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    name: 'Cecilia Mendez',
    image: '/images/support_04.jpg',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    name: 'Mario Fuentes',
    image: '/images/support_01.jpg',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    name: 'Rodrigo Fuente',
    image: '/images/support_02.jpg',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    name: 'Maria Garcia',
    image: '/images/support_03.jpg',
    createdAt:new Date,
    updatedAt:new Date
  },
  {
    name: 'Marco Fernandez',
    image: '/images/support_04.jpg',
    createdAt:new Date,
    updatedAt:new Date
  },
]
const organization = [
  {
    name: 'Somos Más',
    image: '',
    phone: '111',
    address: 'En algún lugar',
    welcomeText: '<p>¡Bienvenidos a nuestra ONG <strong>Somos Mas</strong>.</p><p>Brindamos recursos educativos y apoyo a niños necesitados.</p><p>Creemos que todos los niños tienen derecho a una <strong>educación de calidad</strong> y estamos comprometidos a ayudarlos a alcanzar su máximo potencial.</p><p>¡Gracias por apoyar nuestra causa!</p>',
    socialLinks: JSON.stringify([{"url": "facebook", "name": "Facebook"}, {"url": "instagram", "name": "Instagram"}, {"url": "twitter", "name": "Twitter"}]),
    createdAt: new Date(),
    updatedAt: new Date()
  }
]

module.exports = {
  upDB: async () => {
    await db.User.bulkCreate(usersArray)
    await db.Role.bulkCreate(roles)
    await db.Categories.bulkCreate(categories)
    await db.Entries.bulkCreate(entries)
    await db.Activities.bulkCreate(activities)
    await db.Testimonials.bulkCreate(testimonials)
    await db.Members.bulkCreate(members)
    await db.Organization.bulkCreate(organization)
  }
}