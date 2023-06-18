---
title: Develop a new potential
slug: fit-new-potential
date: 2022-04-19
stack: [Interatomic potentials,Fitting,Machine learning,KLIFF,LAMMPS,KIM API,OpenKIM]
description: Steps to develop a new interatomic potential model.
---

# Create a potential

This is an answer I prepared for the below Matter Modeling questions:

- [What are the open source or software code that can generate potentials?](https://mattermodeling.stackexchange.com/questions/8932/what-are-the-open-source-or-software-code-that-can-generate-potentials)
- [Are there any open source codes that can generate LAMMPS potentials from DFT calculations?](https://mattermodeling.stackexchange.com/questions/8868/are-there-any-open-source-codes-that-can-generate-lammps-potentials-from-dft-cal)

But unfortunately, I do not have the privilege to provide an answer with more than 10 links. So, here it is.

---

There are different flavors of interatomic potentials, from the classical Lennard-Jones and Morse models to more recent machine learning models. I will limit the answer to reactive potential models without considering bonded force fields.

## Check existing potentials repository

Before fitting a new model, first try searching the repositories

- OpenKIM (https://openkim.org)
- NIST (https://www.ctcms.nist.gov/potentials/)

to see whether you can find one that satisfies your needs.
Via the KIM API (https://openkim.org/kim-api), models archived on OpenKIM can be used in various molecular simulation codes, such as LAMMPS, ASE, DL_POLY, GULP, and ASAP. OpenKIM also provides analysis of each model (e.g. citation analysis and tests on canonical properties like cohesive energy and elastic constant), which may help you to decide whether a model satisfies your need. For an example, see https://openkim.org/id/EAM_Dynamo_Ackland_1992_Ti__MO_748534961139_005.

## Build new potentials

If none satisfies the need, there are basically three steps to create a new model.

### Assemble a dataset

Traditionally, potentials are fit to reproduce a set of experimental properties, but nowadays most potentials are fit to more easily obtainable properties from quantum mechanical calculations.

Here are some DFT codes that can be used to generate a dataset of energy, forces, and stress for training the model.

- Quantum Espresso (open source) https://www.quantum-espresso.org
- VASP (commercial) https://www.vasp.at
- ABINIT (open source) https://www.abinit.org
- SIESTA (open source) https://departments.icmab.es/leem/siesta/
- CP2K (open source) https://www.cp2k.org

If you do not want to generate a dataset by yourself, some computational materials databases may have DFT data that can be used for fitting a potential, such as

- The Materials Project https://materialsproject.org
- AFLOW http://www.aflowlib.org
- OQMD https://oqmd.org
- NOMAD https://nomad-lab.eu
- JARVIS https://jarvis.nist.gov

### Train the model

Given a dataset, many open-source codes can be used to fit a potential. Below are some widely used ones, and I categorize them into codes that build physics-based models (e.g. Tersoff) or build machine learning models (e.g. neural network).

#### Physics based

- potfit https://www.potfit.net/wiki/doku.php
- KLIFF https://github.com/openkim/kliff
- atomicrex https://www.atomicrex.org

#### Machine learning

- KLIFF (general purpose) https://github.com/openkim/kliff
- MAML (general purpose) https://github.com/materialsvirtuallab/maml
- GAP (Gaussian approximation potential) https://libatoms.github.io
- MTP (Moment tensor potential) https://mlip.skoltech.ru
- SNAP (Spectral neighbor analysis potential) https://github.com/FitSNAP/FitSNAP
- PANNA (Behler--Parrinello type neural network) https://gitlab.com/PANNAdevs/panna
- AMP (Behler--Parrinello type neural network) https://bitbucket.org/andrewpeterson/amp
- aenet (Behler--Parrinello type neural network) http://ann.atomistic.net
- DeePMD https://github.com/deepmodeling/deepmd-kit
- SchNet (graph neural network) https://github.com/atomistic-machine-learning/schnetpack
- NequIP (equivariant graph neural network) https://github.com/mir-group/nequip

### Deploy the model

Most of the fitting codes listed above do have an interface to either LAMMPS or ASE, or both. So deploying the fitted model for simulation is typically not a problem. PANNA, potfit, and KLIFF have interfaces to the KIM API, and potentials created with them can be used in multiple simulation codes.
