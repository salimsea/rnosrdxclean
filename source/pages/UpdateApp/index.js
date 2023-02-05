import {StatusBar, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import CodePush from 'react-native-code-push';
import {ProgressBar} from 'react-native-paper';
import {useState} from 'react';
import {colors, fontSizes, fontFamilys} from '../../common';
import {Gap} from '../../components';

const UpdateApp = () => {
  const [progressDownload, setProgressDownload] = useState({
    progressBar: 0,
    persentase: 0,
  });
  useEffect(() => {
    CodePush.sync(
      {
        mandatoryInstallMode: CodePush.InstallMode.IMMEDIATE,
      },
      status => {
        switch (status) {
          case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
            console.log('sedang download');
            break;
          case CodePush.SyncStatus.INSTALLING_UPDATE:
            console.log('selesai download dan mulai update');
            break;
          case CodePush.SyncStatus.UP_TO_DATE:
            console.log('aplikasi sudah versi terbaru');
            break;
        }
      },
      download => {
        onDownloading(download);
      },
    );
  }, []);

  const onDownloading = download => {
    var currProgress = parseFloat(
      download.receivedBytes / download.totalBytes,
    ).toFixed(2);

    setProgressDownload({
      progressBar: parseFloat(currProgress),
      persentase: currProgress * 100,
    });

    if (currProgress >= 1) {
      setTimeout(() => {
        CodePush.restartApp();
      }, 3000);
    }
  };

  return (
    <>
      <StatusBar
        translucent
        barStyle={'dark-content'}
        backgroundColor="transparent"
      />
      <View
        style={{
          paddingHorizontal: 20,
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: colors.white,
        }}>
        <Gap height={100} />
        <Text
          style={{
            fontFamily: fontFamilys.primary['400'],
            fontSize: fontSizes.cta,
            textAlign: 'center',
          }}>
          Sedang memperbarui aplikasi. dimohon jangan keluar dari aplikasi
          sampai download selesai !
        </Text>
        <Gap height={30} />
        <View style={{width: '80%', height: 20, backgroundColor: 'white'}}>
          <ProgressBar progress={progressDownload.progressBar} color="blue" />
        </View>
        <Text>{parseInt(progressDownload.persentase) || 0} %</Text>
      </View>
    </>
  );
};

export default UpdateApp;
