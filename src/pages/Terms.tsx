import { useTranslation } from 'react-i18next';

const Terms = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('terms.title')}</h1>
        <p className="text-sm text-muted-foreground mb-8">{t('terms.lastUpdated')}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s1Title')}</h2>
            <p className="text-muted-foreground">{t('terms.s1Body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s2Title')}</h2>
            <p className="text-muted-foreground">{t('terms.s2Body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s3Title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s3intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('terms.s3b1')}</li>
              <li>{t('terms.s3b2')}</li>
              <li>{t('terms.s3b3')}</li>
              <li>{t('terms.s3b4')}</li>
              <li>{t('terms.s3b5')}</li>
            </ul>
            <p className="text-muted-foreground mt-4">{t('terms.s3p1')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s4Title')}</h2>
            <h3 className="text-xl font-semibold mb-2">{t('terms.s4_1Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('terms.s4_1Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('terms.s4_2Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('terms.s4_2Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('terms.s4_3Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('terms.s4_3Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('terms.s4_4Title')}</h3>
            <p className="text-muted-foreground">{t('terms.s4_4Body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s5Title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s5intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('terms.s5b1')}</li>
              <li>{t('terms.s5b2')}</li>
              <li>{t('terms.s5b3')}</li>
              <li>{t('terms.s5b4')}</li>
              <li>{t('terms.s5b5')}</li>
              <li>{t('terms.s5b6')}</li>
              <li>{t('terms.s5b7')}</li>
              <li>{t('terms.s5b8')}</li>
              <li>{t('terms.s5b9')}</li>
              <li>{t('terms.s5b10')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s6Title')}</h2>
            <h3 className="text-xl font-semibold mb-2">{t('terms.s6_1Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('terms.s6_1Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('terms.s6_2Title')}</h3>
            <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t('terms.s6_2Body') }} />
            <h3 className="text-xl font-semibold mb-2">{t('terms.s6_3Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('terms.s6_3Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('terms.s6_4Title')}</h3>
            <p className="text-muted-foreground">{t('terms.s6_4Body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s7Title')}</h2>
            <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t('terms.s7intro') }} />
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li dangerouslySetInnerHTML={{ __html: t('terms.s7b1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('terms.s7b2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('terms.s7b3') }} />
              <li dangerouslySetInnerHTML={{ __html: t('terms.s7b4') }} />
              <li dangerouslySetInnerHTML={{ __html: t('terms.s7b5') }} />
              <li dangerouslySetInnerHTML={{ __html: t('terms.s7b6') }} />
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s8Title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s8intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('terms.s8b1')}</li>
              <li>{t('terms.s8b2')}</li>
              <li>{t('terms.s8b3')}</li>
              <li>{t('terms.s8b4')}</li>
              <li>{t('terms.s8b5')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s9Title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s9intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground mb-4">
              <li dangerouslySetInnerHTML={{ __html: t('terms.s9b1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('terms.s9b2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('terms.s9b3') }} />
              <li dangerouslySetInnerHTML={{ __html: t('terms.s9b4') }} />
              <li dangerouslySetInnerHTML={{ __html: t('terms.s9b5').replace(/<a>/g, '<a href="mailto:privacy@solosolutionsai.com" class="text-primary hover:underline">').replace(/<\/a>/g, '</a>') }} />
            </ul>
            <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('terms.s9p1') }} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s10Title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s10p1')}</p>
            <p className="text-muted-foreground">{t('terms.s10p2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s11Title')}</h2>
            <p className="text-muted-foreground">{t('terms.s11Body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s12Title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s12p1')}</p>
            <p className="text-muted-foreground">{t('terms.s12p2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s13Title')}</h2>
            <p className="text-muted-foreground">{t('terms.s13Body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s14Title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s14p1')}</p>
            <p className="text-muted-foreground mb-4">{t('terms.s14p2')}</p>
            <p className="text-muted-foreground">{t('terms.s14p3')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s15Title')}</h2>
            <p className="text-muted-foreground">{t('terms.s15Body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s16Title')}</h2>
            <p className="text-muted-foreground mb-4">{t('terms.s16p1')}</p>
            <p className="text-muted-foreground">{t('terms.s16p2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s17Title')}</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li dangerouslySetInnerHTML={{ __html: t('terms.s17b1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('terms.s17b2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('terms.s17b3') }} />
              <li dangerouslySetInnerHTML={{ __html: t('terms.s17b4') }} />
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('terms.s18Title')}</h2>
            <p className="text-muted-foreground">{t('terms.s18intro')}</p>
            <p className="text-muted-foreground mt-2" dangerouslySetInnerHTML={{ __html: t('terms.s18email').replace(/<a>/g, '<a href="mailto:legal@solosolutionsai.com" class="text-primary hover:underline">').replace(/<\/a>/g, '</a>') }} />
            <p className="text-muted-foreground mt-2" style={{ whiteSpace: 'pre-line' }}>{t('terms.s18address')}</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Terms;
