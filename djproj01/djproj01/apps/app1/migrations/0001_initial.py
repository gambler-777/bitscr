

# Generated by Django 4.2.4 on 2023-09-03 15:23

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Article',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('article_title', models.CharField(max_length=200, verbose_name='article name')),
                ('article_text', models.TextField(verbose_name='article text')),
                ('pub_date', models.DateTimeField(verbose_name='publication date')),
            ],
        ),
        migrations.CreateModel(
            name='Comment',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('author_name', models.CharField(max_length=50, verbose_name='author name')),
                ('comment_text', models.CharField(max_length=200, verbose_name='comment text')),
                ('article', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='app1.article')),
            ],
        ),
    ]
