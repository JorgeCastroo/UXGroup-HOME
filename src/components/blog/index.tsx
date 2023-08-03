import style from './style.module.scss';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Post, WPResponse } from '@/components/blog/types';

export function Blog() {
  const [post, setPost] = useState<Post>({
    id: 0,
    date: new Date().toDateString(),
    link: '',
    title: { rendered: '' },
    excerpt: { rendered: '' },
    _embedded: {
      'wp:featuredmedia': [{ source_url: '' }],
      'wp:term': [[{ link: '', name: '' }]],
      author: [{ link: '', name: '' }],
    },
  });
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch('https://uxgroup.com.br/index.php')
      .then((res) => res.json() as Promise<WPResponse>)
      .then((res) => {
        setPost(res['featured']);
        setPosts(res['posts']);
      })
      .catch(console.error);
  }, []);

  return (
    <section className={style.container}>
      <div className={style.margin}>
        <div className={style.titleBlock}>
          <h2 className={style.title}>
            Conteúdos exclusivos sobre o nosso setor.
          </h2>
        </div>
        <div className={style.box}>
          <div className={style.featured}>
            <a
              target="_blank"
              href={post.link}
              style={{
                display: 'block',
                position: 'absolute',
                zIndex: 0,
                width: '100%',
                height: '100%',
                top: 0,
                left: 0,
                objectFit: 'fill',
              }}
            >
              <img
                src={post._embedded['wp:featuredmedia'][0].source_url}
                alt={post.title.rendered}
                style={{ zIndex: 1, width: '100%', height: '100%' }}
              />
            </a>
            <a
              target="_blank"
              href={post._embedded['wp:term'][0][0].link}
              className={style.tag}
            >
              {post._embedded['wp:term'][0][0].name}
            </a>
            <div className={style.content}>
              <a href={post.link}>
                <h3 className={style.title}>{post.title.rendered}</h3>
              </a>
              <div
                className={style.text}
                dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
              ></div>
              <a href={post.link}>Ler Completo &gt;</a>
            </div>
          </div>

          <div className={style.cards}>
            {posts.map((p) => (
              <div className={style.card} key={p.id}>
                <a
                  target="_blank"
                  className={style.category}
                  href={p._embedded['wp:term'][0][0].link}
                  style={{ zIndex: 1 }}
                >
                  {p._embedded['wp:term'][0][0].name}
                </a>
                <a
                  target="_blank"
                  href={p.link}
                  style={{
                    display: 'block',
                    width: '234px',
                    height: '203px',
                    position: 'relative',
                  }}
                >
                  <img
                    src={
                      p._embedded['wp:featuredmedia'][0].source_url ??
                      'https://blog.uxgroup.com.br/wp-content/plugins/anwp-post-grid-for-elementor/public/img/empty_image.jpg'
                    }
                    alt={p.title.rendered}
                    width={234}
                    height={203}
                    style={{ position: 'absolute' }}
                  />
                </a>
                <div className={style.release}>
                  <span>
                    <a target="_blank" href={p._embedded.author[0].link}>
                      {p._embedded.author[0].name}
                    </a>
                  </span>
                  <span>{dayjs(p.date).format('DD/MM/YYYY')}</span>
                </div>
                <div className={style.content}>
                  <a href={p.link}>
                    <h3 className={style.title}>{p.title.rendered}</h3>
                  </a>
                  <div
                    className={style.text}
                    dangerouslySetInnerHTML={{
                      __html: p.excerpt.rendered,
                    }}
                  ></div>
                  <a href={p.link}>Ler Completo &gt;</a>
                </div>
              </div>
            ))}
          </div>
        </div>

        <footer>
          <a
            href="https://blog.uxgroup.com.br/"
            target="_blank"
            className={style.gotoBlog}
          >
            acessar blog completo
          </a>
        </footer>
      </div>
    </section>
  );
}
