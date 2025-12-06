import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeDemo, setActiveDemo] = useState<string | null>(null);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-heading font-bold text-xl">K2</span>
            </div>
            <span className="font-heading font-bold text-xl gradient-text">K2 Systems</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => scrollToSection('home')} className="text-foreground hover:text-primary transition-colors">
              Главная
            </button>
            <button onClick={() => scrollToSection('about')} className="text-foreground hover:text-primary transition-colors">
              О компании
            </button>
            <button onClick={() => scrollToSection('services')} className="text-foreground hover:text-primary transition-colors">
              Услуги
            </button>
            <button onClick={() => scrollToSection('features')} className="text-foreground hover:text-primary transition-colors">
              Возможности
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-foreground hover:text-primary transition-colors">
              Контакты
            </button>
          </div>

          <Button className="hidden md:flex">
            Связаться с нами
          </Button>
        </nav>
      </header>

      <section id="home" className="pt-32 pb-20 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl mb-6 leading-tight">
                Удаленное <span className="gradient-text">управление</span> вашим бизнесом
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Профессиональные решения для дистанционного контроля и администрирования корпоративных систем
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать работу
                </Button>
                <Button size="lg" variant="outline" onClick={() => scrollToSection('features')}>
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>
            </div>
            
            <div className="relative animate-fade-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
              <Card className="relative p-8 gradient-border animate-glow">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: 'Monitor', label: 'Мониторинг', value: '24/7' },
                    { icon: 'Shield', label: 'Безопасность', value: '100%' },
                    { icon: 'Zap', label: 'Скорость', value: '<1ms' },
                    { icon: 'Users', label: 'Клиентов', value: '500+' }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center p-4 bg-muted/50 rounded-xl hover:bg-muted transition-colors">
                      <Icon name={stat.icon as any} size={32} className="mx-auto mb-2 text-primary" />
                      <div className="font-heading font-bold text-2xl gradient-text">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">О компании</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              K2 Systems — ведущий поставщик решений для удаленного управления корпоративными системами
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: 'Target',
                title: 'Наша миссия',
                description: 'Обеспечить бесперебойное удаленное управление IT-инфраструктурой любой сложности'
              },
              {
                icon: 'Eye',
                title: 'Наше видение',
                description: 'Стать глобальным лидером в области облачных решений для управления бизнесом'
              },
              {
                icon: 'Award',
                title: 'Наши ценности',
                description: 'Инновации, надежность, безопасность и клиентоориентированность'
              }
            ].map((item, idx) => (
              <Card key={idx} className="p-6 hover:shadow-xl transition-all hover:scale-105 animate-fade-in">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name={item.icon as any} size={24} className="text-primary" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Наши услуги</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Полный спектр решений для управления вашей IT-инфраструктурой
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: 'Server', title: 'Удаленное администрирование', desc: 'Управление серверами и рабочими станциями из любой точки мира' },
              { icon: 'Lock', title: 'Защита данных', desc: 'Комплексная система безопасности и шифрования' },
              { icon: 'Activity', title: 'Мониторинг систем', desc: 'Круглосуточный контроль состояния инфраструктуры' },
              { icon: 'Cloud', title: 'Облачные решения', desc: 'Миграция и управление облачными сервисами' },
              { icon: 'Smartphone', title: 'Мобильный доступ', desc: 'Управление системами с любого устройства' },
              { icon: 'HeadphonesIcon', title: 'Техподдержка 24/7', desc: 'Круглосуточная помощь квалифицированных специалистов' }
            ].map((service, idx) => (
              <Card key={idx} className="p-6 hover:border-primary transition-all group animate-fade-in cursor-pointer">
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={service.icon as any} size={28} className="text-white" />
                </div>
                <h3 className="font-heading font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground">{service.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-6 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">
              Интерактивная <span className="gradient-text">демонстрация</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Попробуйте основные функции нашей системы прямо сейчас
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                { id: 'remote-desktop', icon: 'MonitorPlay', title: 'Удаленный рабочий стол', desc: 'Полный доступ к рабочему столу' },
                { id: 'file-transfer', icon: 'FolderSync', title: 'Передача файлов', desc: 'Быстрая передача файлов любого размера' },
                { id: 'system-monitor', icon: 'LineChart', title: 'Системный монитор', desc: 'Мониторинг производительности в реальном времени' },
                { id: 'security', icon: 'ShieldCheck', title: 'Центр безопасности', desc: 'Контроль доступа и аудит действий' }
              ].map((feature) => (
                <Card
                  key={feature.id}
                  className={`p-6 cursor-pointer transition-all hover:scale-105 ${
                    activeDemo === feature.id ? 'border-primary bg-primary/5' : ''
                  }`}
                  onClick={() => setActiveDemo(feature.id)}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                      activeDemo === feature.id ? 'bg-primary' : 'bg-muted'
                    }`}>
                      <Icon name={feature.icon as any} size={24} className={activeDemo === feature.id ? 'text-white' : 'text-foreground'} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-heading font-bold text-lg mb-1">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                    <Icon name="ChevronRight" size={20} className={activeDemo === feature.id ? 'text-primary' : 'text-muted-foreground'} />
                  </div>
                </Card>
              ))}
            </div>

            <Card className="p-8 gradient-border">
              {activeDemo === 'remote-desktop' && (
                <div className="animate-fade-in">
                  <div className="bg-muted/50 rounded-lg p-6 mb-4">
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-muted-foreground ml-2">Удаленное подключение активно</span>
                    </div>
                    <div className="bg-background rounded p-4 font-mono text-sm">
                      <div className="text-green-400">$ system status</div>
                      <div className="text-muted-foreground mt-2">CPU: 45% | RAM: 62% | Network: 125 Mbps</div>
                      <div className="text-primary mt-1 animate-pulse">› Подключение установлено</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Получите полный контроль над удаленной системой с минимальной задержкой</p>
                </div>
              )}

              {activeDemo === 'file-transfer' && (
                <div className="animate-fade-in">
                  <div className="space-y-3 mb-4">
                    {['document.pdf', 'presentation.pptx', 'database.sql'].map((file, idx) => (
                      <div key={idx} className="bg-muted/50 rounded-lg p-4 flex items-center gap-3">
                        <Icon name="File" size={20} className="text-primary" />
                        <div className="flex-1">
                          <div className="text-sm font-medium">{file}</div>
                          <div className="w-full bg-background rounded-full h-2 mt-2">
                            <div className="bg-gradient-to-r from-primary to-secondary h-2 rounded-full animate-pulse" style={{ width: `${(idx + 1) * 30}%` }}></div>
                          </div>
                        </div>
                        <span className="text-xs text-muted-foreground">{(idx + 1) * 30}%</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground">Безопасная передача файлов с шифрованием и возможностью возобновления</p>
                </div>
              )}

              {activeDemo === 'system-monitor' && (
                <div className="animate-fade-in">
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Cpu" size={20} className="text-primary" />
                        <span className="text-sm font-medium">CPU</span>
                      </div>
                      <div className="text-2xl font-heading font-bold gradient-text">45%</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="MemoryStick" size={20} className="text-secondary" />
                        <span className="text-sm font-medium">RAM</span>
                      </div>
                      <div className="text-2xl font-heading font-bold gradient-text">8.2 GB</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="HardDrive" size={20} className="text-primary" />
                        <span className="text-sm font-medium">Диск</span>
                      </div>
                      <div className="text-2xl font-heading font-bold gradient-text">245 GB</div>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon name="Wifi" size={20} className="text-secondary" />
                        <span className="text-sm font-medium">Сеть</span>
                      </div>
                      <div className="text-2xl font-heading font-bold gradient-text">125 Mbps</div>
                    </div>
                  </div>
                  <p className="text-muted-foreground">Отслеживайте все ключевые показатели системы в режиме реального времени</p>
                </div>
              )}

              {activeDemo === 'security' && (
                <div className="animate-fade-in">
                  <div className="space-y-3 mb-4">
                    {[
                      { icon: 'CheckCircle2', text: 'Двухфакторная аутентификация активна', status: 'success' },
                      { icon: 'CheckCircle2', text: 'Шифрование AES-256 включено', status: 'success' },
                      { icon: 'CheckCircle2', text: 'Последняя проверка безопасности пройдена', status: 'success' },
                      { icon: 'AlertCircle', text: 'Обновление доступно', status: 'warning' }
                    ].map((item, idx) => (
                      <div key={idx} className="bg-muted/50 rounded-lg p-4 flex items-center gap-3">
                        <Icon 
                          name={item.icon as any} 
                          size={20} 
                          className={item.status === 'success' ? 'text-green-500' : 'text-yellow-500'} 
                        />
                        <span className="text-sm">{item.text}</span>
                      </div>
                    ))}
                  </div>
                  <p className="text-muted-foreground">Многоуровневая защита и постоянный аудит всех операций</p>
                </div>
              )}

              {!activeDemo && (
                <div className="text-center py-12 animate-fade-in">
                  <Icon name="MousePointerClick" size={64} className="mx-auto mb-4 text-muted-foreground/50" />
                  <p className="text-muted-foreground">Выберите функцию слева, чтобы увидеть демонстрацию</p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="font-heading font-bold text-4xl md:text-5xl mb-4">Свяжитесь с нами</h2>
            <p className="text-lg text-muted-foreground">
              Готовы начать? Свяжитесь с нами для консультации
            </p>
          </div>

          <Card className="p-8 gradient-border">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-heading font-bold text-xl mb-6">Контактная информация</h3>
                <div className="space-y-4">
                  {[
                    { icon: 'Mail', label: 'Email', value: 'info@k2systems.com' },
                    { icon: 'Phone', label: 'Телефон', value: '+7 (495) 123-45-67' },
                    { icon: 'MapPin', label: 'Адрес', value: 'Москва, ул. Примерная, 123' },
                    { icon: 'Clock', label: 'Время работы', value: 'Пн-Пт: 9:00 - 18:00' }
                  ].map((contact, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name={contact.icon as any} size={20} className="text-primary" />
                      </div>
                      <div>
                        <div className="font-medium text-sm text-muted-foreground">{contact.label}</div>
                        <div className="font-medium">{contact.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="font-heading font-bold text-xl mb-6">Напишите нам</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Ваше имя"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Сообщение"
                      rows={4}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                    ></textarea>
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить сообщение
                  </Button>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </section>

      <footer className="bg-card/50 py-12 px-6 border-t border-border">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
                  <span className="text-white font-heading font-bold text-xl">K2</span>
                </div>
                <span className="font-heading font-bold gradient-text">K2 Systems</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Инновационные решения для удаленного управления бизнесом
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Компания</h4>
              <div className="space-y-2 text-sm">
                <div><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">О нас</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Команда</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Карьера</a></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Услуги</h4>
              <div className="space-y-2 text-sm">
                <div><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Все услуги</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Цены</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Документация</a></div>
              </div>
            </div>
            
            <div>
              <h4 className="font-heading font-bold mb-4">Поддержка</h4>
              <div className="space-y-2 text-sm">
                <div><a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-primary transition-colors">FAQ</a></div>
                <div><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Помощь</a></div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 K2 Systems. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-colors group">
                <Icon name="Github" size={20} className="text-muted-foreground group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-colors group">
                <Icon name="Twitter" size={20} className="text-muted-foreground group-hover:text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary transition-colors group">
                <Icon name="Linkedin" size={20} className="text-muted-foreground group-hover:text-white" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
