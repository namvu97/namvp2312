import { useTranslation } from 'react-i18next';
import movie from './../img/traveling.png';
import music from './../img/music.png';
import gaming from './../img/gaming.png';

export default function Content() {
  const { t } = useTranslation();
  return (
    <div className="content">
      <div>
        <h2 className="fullname">{t('fullname')}</h2>
        <h3 className="career">BACKEND/AWS DEVELOPER</h3>
        <div className="introduction">{t('introduction')}</div>
      </div>
      <div className="module">
        <h3>{t('education')}</h3>
        <div className="section">
          <div className="left">
            <b>{t('university')}</b>
            <div>09/2015 - 01/2020</div>
          </div>
          <div className="right">{t('education_c')}</div>
        </div>
      </div>
      <div className="module">
        <h3>{t('experience')}</h3>
        <div className="section">
          <div className="left">
            <b className="company_name">Amela Technology</b>
            <div>03/2020 - 12/2021</div>
          </div>
          <div className="right">{t('amela_c')}</div>
        </div>
      </div>
      <div className="module">
        <div className="section">
          <div className="left">
            <b>Monolith Matching System</b>
            <div>03/2020 - 12/2020</div>
          </div>
          <div className="right">{t('monolith_c')}</div>
        </div>
        <div className="section">
          <div className="left">
            <b>Transport System</b>
            <div>10/2020 - 12/2021</div>
          </div>
          <div className="right">{t('tps_c')}</div>
        </div>
        <div className="section">
          <div className="left">
            <b>Clinic Order App</b>
            <div>03/2021 - 12/2021</div>
          </div>
          <div className="right">{t('coa_c')}</div>
        </div>
      </div>
      <div className="module">
        <div className="section">
          <div className="left">
            <b className="company_name">Ekoios Technology</b>
            <div>02/2022 - 08/2022</div>
          </div>
          <div className="right">{t('ekoios_c')}</div>
        </div>
      </div>
      <div className="module">
        <div className="section">
          <div className="left">
            <b>CIS System</b>
            <div>02/2022 - 08/2022</div>
          </div>
          <div className="right">{t('cis_c')}</div>
        </div>
      </div>
      <div className="module">
        <div className="section">
          <div className="left">
            <b className="company_name">Powergate Software</b>
            <div>09/2022 - {t('now')}</div>
          </div>
          <div className="right">{t('ekoios_c')}</div>
        </div>
      </div>
      <div className="module">
        <div className="section">
          <div className="left">
            <b>Serverless Guru</b>
            <div>09/2022 - {t('now')}</div>
          </div>
          <div className="right">{t('sls_c')}</div>
        </div>
      </div>
      <div className="module">
        <h3>{t('certificate')}</h3>
        <div className="section">
          <div className="left">
            <b>Toeic Certificate Issued By IIG</b>
          </div>
          <div className="right">625 {t('point')} (2018)</div>
        </div>
        <div className="section">
          <div className="left">
            <b>DevPro Education System</b>
          </div>
          <div className="right">{t('programmer_php')} (2018)</div>
        </div>
        <div className="section">
          <div className="left">
            <b>FreeCodeCamp (Responsive Web Design)</b>
          </div>
          <div className="right">
            <a href="https://www.freecodecamp.org/certification/namvu97/responsive-web-design">
              FreeCodeCamp (Responsive Web Design)
            </a>{' '}
            (2019)
          </div>
        </div>
        <div className="section">
          <div className="left">
            <b>FreeCodeCamp (JavaScript Algorithms and Data Structures)</b>
          </div>
          <div className="right">
            <a href="https://www.freecodecamp.org/certification/namvu97/javascript-algorithms-and-data-structures">
              FreeCodeCamp (JavaScript Algorithms and Data Structures)
            </a>{' '}
            (2019)
          </div>
        </div>
      </div>
      <div className="module">
        <h3>{t('hobbies')}</h3>
        <div className="section">
          <div className="hobby">
            <img src={movie} alt="movie" />
            {t('movie')}
          </div>
          <div className="hobby">
            <img src={music} alt="music" />
            {t('music')}
          </div>
          <div className="hobby">
            <img src={gaming} alt="gaming" />
            {t('gaming')}
          </div>
        </div>
      </div>
    </div>
  );
}
