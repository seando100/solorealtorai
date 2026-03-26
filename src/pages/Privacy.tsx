import { useTranslation } from 'react-i18next';

const Privacy = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold mb-4">{t('privacy.title')}</h1>
        <p className="text-sm text-muted-foreground mb-8">{t('privacy.lastUpdated')}</p>

        <div className="prose prose-slate max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s1Title')}</h2>
            <p className="text-muted-foreground">{t('privacy.s1p1')}</p>
            <p className="text-muted-foreground mt-4">{t('privacy.s1p2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s2Title')}</h2>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2_1Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s2_1Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2_2Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s2_2Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2_3Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s2_3Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2_4Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s2_4Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s2_5Title')}</h3>
            <p className="text-muted-foreground">{t('privacy.s2_5Body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s3Title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s3p1')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li dangerouslySetInnerHTML={{ __html: t('privacy.s3b1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.s3b2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.s3b3') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.s3b4') }} />
            </ul>
            <p className="text-muted-foreground mt-4">{t('privacy.s3p2')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s4Title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s4intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('privacy.s4b1')}</li>
              <li>{t('privacy.s4b2')}</li>
              <li>{t('privacy.s4b3')}</li>
              <li>{t('privacy.s4b4')}</li>
              <li>{t('privacy.s4b5')}</li>
              <li>{t('privacy.s4b6')}</li>
              <li>{t('privacy.s4b7')}</li>
              <li>{t('privacy.s4b8')}</li>
              <li>{t('privacy.s4b9')}</li>
              <li>{t('privacy.s4b10')}</li>
              <li>{t('privacy.s4b11')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s5Title')}</h2>
            <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t('privacy.s5intro') }} />
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5_1Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s5_1Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5_2Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s5_2Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5_3Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s5_3Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5_4Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s5_4Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5_5Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s5_5Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s5_6Title')}</h3>
            <p className="text-muted-foreground">{t('privacy.s5_6Body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s6Title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s6intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>{t('privacy.s6b1')}</li>
              <li>{t('privacy.s6b2')}</li>
              <li>{t('privacy.s6b3')}</li>
              <li>{t('privacy.s6b4')}</li>
              <li>{t('privacy.s6b5')}</li>
              <li>{t('privacy.s6b6')}</li>
              <li>{t('privacy.s6b7')}</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s7Title')}</h2>
            <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t('privacy.s7p1') }} />
            <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t('privacy.s7p2') }} />
            <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t('privacy.s7p3') }} />
            <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t('privacy.s7p4') }} />
            <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('privacy.s7p5').replace(/<a>/g, '<a href="mailto:privacy@solosolutionsai.com" class="text-primary hover:underline">').replace(/<\/a>/g, '</a>') }} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s8Title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s8intro')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8_1Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s8_1Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8_2Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s8_2Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8_3Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s8_3Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8_4Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s8_4Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8_5Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s8_5Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s8_6Title')}</h3>
            <p className="text-muted-foreground">{t('privacy.s8_6Body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s9Title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s9intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li dangerouslySetInnerHTML={{ __html: t('privacy.s9b1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.s9b2') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.s9b3') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.s9b4') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.s9b5') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.s9b6') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.s9b7') }} />
            </ul>
            <p className="text-muted-foreground mt-4" dangerouslySetInnerHTML={{ __html: t('privacy.s9p1').replace(/<a>/g, '<a href="mailto:privacy@solosolutionsai.com" class="text-primary hover:underline">').replace(/<\/a>/g, '</a>') }} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s10Title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s10intro')}</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li dangerouslySetInnerHTML={{ __html: t('privacy.s10b1') }} />
              <li dangerouslySetInnerHTML={{ __html: t('privacy.s10b2') }} />
            </ul>
            <p className="text-muted-foreground mt-4">{t('privacy.s10p1')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s11Title')}</h2>
            <p className="text-muted-foreground mb-4">{t('privacy.s11intro')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s11_1Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s11_1p1')}</p>
            <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t('privacy.s11_1p2').replace(/<a>/g, '<a href="https://ico.org.uk" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">').replace(/<\/a>/g, '</a>') }} />
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s11_2Title')}</h3>
            <p className="text-muted-foreground mb-4">{t('privacy.s11_2Body')}</p>
            <h3 className="text-xl font-semibold mb-2">{t('privacy.s11_3Title')}</h3>
            <p className="text-muted-foreground mb-4" dangerouslySetInnerHTML={{ __html: t('privacy.s11_3Body').replace(/<a>/g, '<a href="mailto:privacy@solosolutionsai.com" class="text-primary hover:underline">').replace(/<\/a>/g, '</a>') }} />
            <p className="text-muted-foreground">{t('privacy.s11p1')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s12Title')}</h2>
            <p className="text-muted-foreground" dangerouslySetInnerHTML={{ __html: t('privacy.s12Body').replace(/<a>/g, '<a href="mailto:privacy@solosolutionsai.com" class="text-primary hover:underline">').replace(/<\/a>/g, '</a>') }} />
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s13Title')}</h2>
            <p className="text-muted-foreground">{t('privacy.s13Body')}</p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">{t('privacy.s14Title')}</h2>
            <p className="text-muted-foreground">{t('privacy.s14intro')}</p>
            <p className="text-muted-foreground mt-2" dangerouslySetInnerHTML={{ __html: t('privacy.s14email').replace(/<a>/g, '<a href="mailto:privacy@solosolutionsai.com" class="text-primary hover:underline">').replace(/<\/a>/g, '</a>') }} />
            <p className="text-muted-foreground mt-2" style={{ whiteSpace: 'pre-line' }}>{t('privacy.s14address')}</p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Privacy;
