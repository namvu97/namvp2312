import avatar from './../img/avatar.jpeg';
//@ts-ignore
import SimpleLineIcon from 'react-simple-line-icons';
import { useTranslation } from 'react-i18next';

export default function Sidebar() {
  const { t } = useTranslation();
  return (
    <div className="sidebar">
      <div className="avatar">
        <img src={avatar} alt="avatar" />
      </div>
      <div className="phone">
        <SimpleLineIcon name="phone" />
        0332767399
      </div>
      <div className="email">
        <SimpleLineIcon name="envelope" />
        namvp2312@gmail.com
      </div>
      <div className="website">
        <SimpleLineIcon name="globe" />
        <a href="https://github.com/namvu97" target="_blank" rel="noopener noreferrer">
          github.com/namvu97
        </a>
      </div>
      <div className="module">
        <h3>{t('personal')}</h3>
        <label>{t('birthdate')}:</label>
        <label>{t('birthdate_c')}</label>
        <label>{t('sex')}:</label>
        <label>{t('male')}</label>
        <label>{t('address')}:</label>
        <label>{t('address_c')}</label>
      </div>
      <div className="module">
        <h3>{t('language')}</h3>
        <label>{t('vietnamese')}</label>
        <label className="progress">
          <span style={{ width: '100%' }}></span>
        </label>
        <label>{t('english')}</label>
        <label className="progress">
          <span style={{ width: '50%' }}></span>
        </label>
      </div>
      <div className="module">
        <h3>{t('skill')}</h3>
        <hr />
        <div>
          <b>{t('technical_skills')}: </b>
          <div>- HTML, CSS, Javascript, Jquery, NodeJS, ReactJS, Angular 8, Ionic, Java, Python, PHP, ...</div>
        </div>
        <hr />
        <div>
          <b>{t('databases')}: </b>
          <div>- MySQL, MongoDB, OracleDB, Redis, Firebase firestore, AWS RDS, AWS DynamoDB.</div>
        </div>
        <hr />
        <div>
          <b>{t('clouds')}: </b>
          <div>
            - AWS Cloud ( Lambda, Glue Job, Kinesis Data Applications, Kafka, SNS, SQS, CloudWatch, CloudFormation,
            State Machine, Athena, S3, EC2, DynamoDB, RDS, SSM, SCM, IAM, ...).
          </div>
        </div>
        <hr />
        <div>
          <b>{t('other_skills')}: </b>
          <div>- {t('other_skills_c')}</div>
        </div>
        <hr />
      </div>
      <div className="module">
        <h3>{t('software')}</h3>
        <div>- VS Code, IntelliJ IDEA, Sublime Text, Figma, XD, ...</div>
        <div>- Github, Gitlab, Bitbucket.</div>
        <div>- Jira, Trello, Backlog.</div>
        <div>- AWS console.</div>
        {/* <label>VS Code</label>
        <label className="progress">
          <span style={{ width: '85%' }}></span>
        </label>
        <label>IntelliJ IDEA</label>
        <label className="progress">
          <span style={{ width: '70%' }}></span>
        </label>
        <label>Sublime Text</label>
        <label className="progress">
          <span style={{ width: '60%' }}></span>
        </label>
        <label>Figma</label>
        <label className="progress">
          <span style={{ width: '70%' }}></span>
        </label>
        <label>XD</label>
        <label className="progress">
          <span style={{ width: '50%' }}></span>
        </label> */}
      </div>
    </div>
  );
}
