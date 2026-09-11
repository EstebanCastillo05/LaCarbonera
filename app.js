document.addEventListener('DOMContentLoaded', () => {
    // ================= 1. MENÚ MÓVIL =================
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.getElementById('nav-links');
    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => navLinks.classList.toggle('active'));
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => navLinks.classList.remove('active'));
        });
    }

    const defaultImage = 'img/frente.webp';

    // ================= 2. DATASET DEL MENÚ =================
    const menuItems = [
        // CALDOS & SOPAS
        { id: "c1", categoria: "Caldos & Sopas", nombre: "Caldo de Gallina Criolla", precio: 65, desc: "1/4 de gallina criolla servido con arroz y vegetales.", img: "img/caldores.webp" },
        { id: "c2", categoria: "Caldos & Sopas", nombre: "Caldo de Pata", precio: 65, desc: "Trozos de pata de res premium cocida a fuego lento.", img: "img/caldopata.webp" },
        { id: "c3", categoria: "Caldos & Sopas", nombre: "Caldo Tlalpeño", precio: 60, desc: "Pollo, queso mozzarella y totopos de maíz.", img: "img/caldotortilla.webp" },
        { id: "c4", categoria: "Caldos & Sopas", nombre: "Caldo de Mariscos", precio: 120, desc: "Jaiba, almeja, camarones jumbo, camarones pequeños y bagre entero 1 lb.", img: "img/caldores.webp" },
        { id: "c5", categoria: "Caldos & Sopas", nombre: "Sopa de Camarones", precio: 99, desc: "Camarones jumbo seleccionados y vegetales.", img: "img/caldores.webp" },

        // MARISCOS
        { id: "m1", categoria: "Mariscos", nombre: "Ceviche Mixto", precio: 60, desc: "Acompañado de tostadas de la casa o galleta.", img: defaultImage },
        { id: "m2", categoria: "Mariscos", nombre: "Aguachile", precio: 70, desc: "Camarones frescos con receta tradicional verde.", img: defaultImage },
        { id: "m3", categoria: "Mariscos", nombre: "Ceviche de Camarón", precio: 75, desc: "Acompañado de tostadas de la casa o galleta.", img: defaultImage },
        { id: "m4", categoria: "Mariscos", nombre: "Mojarra Frita", precio: 80, desc: "Acompañada de ensalada jardinera y papas de la casa.", img: defaultImage },
        { id: "m5", categoria: "Mariscos", nombre: "Camarones al Gusto", precio: 125, desc: "Jumbo: empanizados, al mojo de ajo, a la diabla o a la parrilla.", img: defaultImage },

        // PARRILLA Y CORTES
        { id: "p-pechuga", categoria: "Parrilla & Cortes", nombre: "Filete de Pechuga a la Parrilla", precio: 59, desc: "Pechuga asada al carbón con papas, elote y cebollín.", img: defaultImage },
        { id: "p-adobado", categoria: "Parrilla & Cortes", nombre: "Adobado de la Casa", precio: 50, desc: "Carne de cerdo adobada acompañada de chorizo o longaniza y guarniciones.", img: defaultImage },
        { id: "p-cordero", categoria: "Parrilla & Cortes", nombre: "Cordero de los Cuchumatanes", precio: 125, desc: "Pierna de cordero de la sierra (8 oz) marinada y asada a la brasa.", img: defaultImage },
        { id: "p-myt", categoria: "Parrilla & Cortes", nombre: "Mar y Tierra", precio: 140, desc: "Puyazo importado 5 oz con camarones jumbo y guarniciones completas.", img: defaultImage },
        {
            id: "p-churrascos",
            categoria: "Parrilla & Cortes",
            nombre: "Churrascos Tradicionales",
            precioBase: 59,
            desc: "Cortes de res asados al carbón con guarniciones de la casa.",
            img: defaultImage,
            variantes: [
                { nombre: "Churrasco Simple (5 oz)", precio: 59 },
                { nombre: "Churrasco Doble (10 oz)", precio: 85 },
                { nombre: "Churrasco Mixto Completo", precio: 110 }
            ]
        },
        {
            id: "p-cortes",
            categoria: "Parrilla & Cortes",
            nombre: "Cortes Importados",
            precioBase: 110,
            desc: "Selección de cortes premium a la parrilla.",
            img: defaultImage,
            variantes: [
                { nombre: "Puyazo Importado (6 oz)", precio: 110 },
                { nombre: "Asado de Tira (8 oz)", precio: 140 },
                { nombre: "Arrachera (8 oz)", precio: 150 },
                { nombre: "Lomito Importado (8 oz)", precio: 150 },
                { nombre: "Rib Eye (16 oz)", precio: 225 },
                { nombre: "Tomahawk Steak", precio: 275 }
            ]
        },

        // ENTRADAS & SNACKS
        { id: "e1", categoria: "Entradas & Snacks", nombre: "Nachos con Carne y Cheddar", precio: 45, desc: "Totopos con carne sazonada y queso cheddar fundido.", img: defaultImage },
        { id: "e2", categoria: "Entradas & Snacks", nombre: "Costillas Baby Back (1/2 lb)", precio: 50, desc: "Salsa BBQ o búfalo, montadas sobre totopos.", img: defaultImage },
        { id: "e3", categoria: "Entradas & Snacks", nombre: "Alitas de la Casa (1 lb)", precio: 60, desc: "Salsa BBQ o búfalo, montadas sobre totopos y aderezo.", img: defaultImage },
        { id: "e4", categoria: "Entradas & Snacks", nombre: "Picada de Chorizo Argentino", precio: 50, desc: "Chorizo parrillero argentino troceado.", img: defaultImage },
        { id: "e5", categoria: "Entradas & Snacks", nombre: "Fundido de Queso", precio: 50, desc: "Queso fundido al sartén servido caliente.", img: defaultImage },
        { 
            id: "e6", 
            categoria: "Entradas & Snacks", 
            nombre: "Snacks Tradicionales", 
            precioBase: 25, 
            desc: "Acompañamientos ligeros para empezar.", 
            img: defaultImage,
            variantes: [
                { nombre: "Porción de Quesadillas", precio: 25 },
                { nombre: "Papas Fritas de la Casa", precio: 25 }
            ]
        },

        // COMIDA CASUAL
        {
            id: "u1",
            categoria: "Comida Casual",
            nombre: "Hamburguesas Artesanales",
            precioBase: 60,
            desc: "En pan brioche, acompañadas de papas fritas.",
            img: defaultImage,
            variantes: [
                { nombre: "Clásica (Cheddar, Lechuga, Tomate)", precio: 60 },
                { nombre: "BBQ (Salsa BBQ, Cebolla caramelizada, Queso)", precio: 70 },
                { nombre: "Mar y Tierra (Res, Camarones, Queso)", precio: 80 },
                { nombre: "Deluxe Carbonera (Arrachera, Tocino, Queso)", precio: 89 }
            ]
        },
        {
            id: "u2",
            categoria: "Comida Casual",
            nombre: "Paninis en Pan Focaccia",
            precioBase: 60,
            desc: "Con mozzarella fundido, vegetales salteados y papas.",
            img: defaultImage,
            variantes: [
                { nombre: "Panini de Pollo", precio: 60 },
                { nombre: "Panini Pork Belly (Lomo deshebrado)", precio: 60 },
                { nombre: "Panini de Res Salteada", precio: 70 },
                { nombre: "Panini de Camarón Salteado", precio: 70 }
            ]
        },
        {
            id: "u3",
            categoria: "Comida Casual",
            nombre: "Tacos al Carbón (3 Uds)",
            precioBase: 75,
            desc: "En tortilla hecha a mano con salsas de la casa.",
            img: defaultImage,
            variantes: [
                { nombre: "Tacos de Puyazo", precio: 75 },
                { nombre: "Tacos de Lengua", precio: 75 },
                { nombre: "Tacos de Camarón", precio: 80 }
            ]
        },

        // BEBIDAS
        {
            id: "b1",
            categoria: "Bebidas",
            nombre: "Refrescos y Limonadas",
            precioBase: 12,
            desc: "Bebidas frías por vaso o jarra familiar.",
            img: defaultImage,
            variantes: [
                { nombre: "Gaseosa / Coca Cola", precio: 12 },
                { nombre: "Vaso Horchata / Jamaica / Tamarindo", precio: 20 },
                { nombre: "Limonada o Naranjada", precio: 20 },
                { nombre: "Jarra Familiar de Refresco", precio: 50 }
            ]
        },
        { id: "b2", categoria: "Bebidas", nombre: "Frappes & Smoothies", precio: 30, desc: "Oreo, chocolate, caramelo, fresa, maracuyá o piña colada.", img: defaultImage },
        {
            id: "b3",
            categoria: "Bebidas",
            nombre: "Café Huehueteco & Calientes",
            precioBase: 12,
            desc: "Café de altura local, té y chocolates.",
            img: defaultImage,
            variantes: [
                { nombre: "Café Negro 100% Huehueteco", precio: 12 },
                { nombre: "Café con Leche", precio: 15 },
                { nombre: "Chocolate Artesanal", precio: 15 }
            ]
        },
        {
            id: "b4",
            categoria: "Bebidas",
            nombre: "Cervezas Nacionales",
            precioBase: 20,
            desc: "Cervezas frías y preparadas estilo michelada.",
            img: defaultImage,
            variantes: [
                { nombre: "Gallo", precio: 20 },
                { nombre: "Monte Carlo / Cabro Reserva", precio: 30 },
                { nombre: "Michelada Gallo", precio: 30 },
                { nombre: "Michelada Cabro Reserva", precio: 35 }
            ]
        },
        {
            id: "b5",
            categoria: "Bebidas",
            nombre: "Coctelería Seleccionada",
            precioBase: 25,
            desc: "Tragos preparados y recetas emblemáticas.",
            img: defaultImage,
            variantes: [
                { nombre: "Cuba Libre", precio: 25 },
                { nombre: "Mojitos / Margaritas / Gin Tonic", precio: 35 },
                { nombre: "Zacapita de la Casa", precio: 50 }
            ]
        }
    ];

    const categories = [
        'Parrilla & Cortes',
        'Caldos & Sopas',
        'Mariscos',
        'Entradas & Snacks',
        'Comida Casual',
        'Bebidas'
    ];

    const menuTabs = document.getElementById('menu-tabs');
    const menuGrid = document.getElementById('menu-grid');
    const dishModal = document.getElementById('dish-modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');

    const modalTitle = document.getElementById('dish-modal-title');
    const modalDesc = document.getElementById('dish-modal-description');
    const modalPrice = document.getElementById('dish-modal-price');
    const modalVariants = document.getElementById('dish-modal-variants');

    if (menuGrid && menuTabs) {
        const formatPrice = (p) => `Q ${Number(p).toFixed(2)}`;

        const renderMenu = (selectedCat) => {
            const filtered = menuItems.filter(item => item.categoria === selectedCat);
            
            menuGrid.innerHTML = filtered.map(item => {
                const hasVariants = Boolean(item.variantes && item.variantes.length > 0);
                return `
                    <article class="menu-card" data-id="${item.id}" data-has-variants="${hasVariants}">
                        <div class="card-image-wrap">
                            <img src="${item.img}" alt="${item.nombre}" loading="lazy" onerror="this.src='https://placehold.co/600x400/381e10/ffffff?text=La+Carbonera'">
                        </div>
                        <div class="menu-card-content">
                            <h3>${item.nombre}</h3>
                            <p>${item.desc || ''}</p>
                            <div class="menu-card-footer">
                                <span class="menu-price">${hasVariants ? `Desde ${formatPrice(item.precioBase)}` : formatPrice(item.precio)}</span>
                                ${hasVariants ? '<span class="menu-card-hint-btn">Ver opciones &rarr;</span>' : ''}
                            </div>
                        </div>
                    </article>
                `;
            }).join('');
        };

        categories.forEach((cat, index) => {
            const btn = document.createElement('button');
            btn.className = `menu-tab ${index === 0 ? 'active' : ''}`;
            btn.textContent = cat;
            btn.type = 'button';
            btn.role = 'tab';
            btn.addEventListener('click', () => {
                document.querySelectorAll('.menu-tab').forEach(t => t.classList.remove('active'));
                btn.classList.add('active');
                renderMenu(cat);
            });
            menuTabs.appendChild(btn);
        });

        renderMenu(categories[0]);

        const openModal = (item) => {
            if (!dishModal) return;
            if (modalTitle) modalTitle.textContent = item.nombre;
            if (modalDesc) modalDesc.textContent = item.desc || 'Platillo preparado con la calidad de La Carbonera.';
            if (modalPrice) modalPrice.textContent = `Opciones Disponibles (Desde ${formatPrice(item.precioBase)})`;
            if (modalVariants && item.variantes) {
                modalVariants.innerHTML = item.variantes.map(v => `
                    <li><span>${v.nombre}</span><strong>${formatPrice(v.precio)}</strong></li>
                `).join('');
            }
            dishModal.classList.add('is-open');
            document.body.style.overflow = 'hidden';
        };

        const closeModal = () => {
            if (!dishModal) return;
            dishModal.classList.remove('is-open');
            document.body.style.overflow = '';
        };

        menuGrid.addEventListener('click', (e) => {
            const card = e.target.closest('.menu-card');
            if (!card || card.dataset.hasVariants !== 'true') return;
            const selectedItem = menuItems.find(i => i.id === card.dataset.id);
            if (selectedItem) openModal(selectedItem);
        });

        if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeModal);
        if (dishModal) {
            dishModal.addEventListener('click', (e) => { if (e.target === dishModal) closeModal(); });
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && dishModal.classList.contains('is-open')) closeModal();
            });
        }
    }

    // ================= 3. ENVÍO DE POSTULACIÓN A WHATSAPP =================
    const formEmpleo = document.getElementById('form-empleo');
    if (formEmpleo) {
        formEmpleo.addEventListener('submit', (e) => {
            e.preventDefault();

            const getVal = (id) => {
                const el = document.getElementById(id);
                return el ? el.value.trim() : '';
            };

            const nombre = getVal('nombre');
            const apellido = getVal('apellido');
            const telefono = getVal('telefono');
            const transporte = getVal('transporte');
            const direccion = getVal('direccion');
            const disponibilidad = getVal('disponibilidad');
            const tarjetas = getVal('tarjetas');
            const experiencia = getVal('experiencia') || 'Sin experiencia previa especificada';

            const textoMensaje = 
                `*NUEVA POSTULACIÓN - RESTAURANTE LA CARBONERA*\n\n` +
                `*Candidato:* ${nombre} ${apellido}\n` +
                `*Teléfono:* ${telefono}\n` +
                `*Dirección:* ${direccion}\n` +
                `*Transporte propio:* ${transporte}\n` +
                `*Disponibilidad de Turno:* ${disponibilidad}\n` +
                `*Tarjetas de Salud/Manipulación:* ${tarjetas}\n` +
                `*Experiencia / Habilidades:* ${experiencia}\n\n` +
                `_Postulación enviada desde la plataforma web oficial._`;

            const numeroRestaurante = '50245583931';
            const urlWhatsApp = `https://wa.me/${numeroRestaurante}?text=${encodeURIComponent(textoMensaje)}`;

            window.open(urlWhatsApp, '_blank');
            formEmpleo.reset();
        });
    }

    // ================= 4. ANIMACIONES AL HACER SCROLL =================
    const revealEls = document.querySelectorAll('.reveal-blur, .reveal-left, .reveal-right');
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!('IntersectionObserver' in window) || prefersReducedMotion) {
        revealEls.forEach((el) => el.classList.add('is-visible'));
    } else {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15 }
        );

        revealEls.forEach((el) => observer.observe(el));
    }
});